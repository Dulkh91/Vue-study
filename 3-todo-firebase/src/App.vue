<template>
    <div class="contain">
        <form class="form-input" @submit.prevent="addTodo">
            <input 
            v-model="newArticleTodo"
            type="text" placeholder="Add todo">
            <button 
            :disabled="!newArticleTodo"
            class="btn-gb">Add</button>
        </form>

        <!--MARK: Custom Card-->
        <card 
            v-for="todo in todos"
            :class="{sucess: todo.done}"
        >
            <div 
                :class="{line: todo.done}"
                class="txt">{{ todo.article }}</div>
            <div class="btn-box">
                <button
                    @click="toggleBtn(todo.id)"
                    :class="todo.done? 'btnSucess': 'btn-check' " 
                    class=" ">&check;</button>
                <button
                @click="deleteTodo(todo.id)" 
                class="btn-cross">&cross;</button>
            </div>
        </card>
    </div>
</template>

<script setup>
 //MARK: Import
 import Card from '@/components/Card.vue';
 import { ref, onMounted} from 'vue';
 import { collection, onSnapshot , addDoc, doc, deleteDoc, updateDoc} from "firebase/firestore";
 import {db} from '@/firebase'

 //MARK: To Do
 const todos = ref([])

//MARK: Get data real-time update
onMounted(async ()=>{
  onSnapshot(collection(db, "todos"), (querySnapshot) => {
  const fbTodos = []
    querySnapshot.forEach((doc) => {
            const todo = {
          id: doc.id,
          article: doc.data().article,
          done: doc.data().done
        }
        fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})
//MARK: Add data
const newArticleTodo = ref()
const addTodo = ()=>{
    addDoc(collection(db, "todos"), {
      article: newArticleTodo.value,
      done: false
    }) 
    newArticleTodo.value = ''
}
//MARK: Delete data
const deleteTodo = id =>{
  deleteDoc(doc(db, "todos", id))
}
//MARK: Mark Done
const toggleBtn = id =>{
    const index = todos.value.findIndex(todo =>todo.id == id)
    updateDoc(doc(db, "todos", id), {
    done: !todos.value[index].done
  })
  //todos.value[index].done //REMARK: if done: true is true but done: false is false
}
</script>


<style>
body{
  background-color: rgba(0, 0, 0, 0.69);
}
.contain{
  width: 500px;
  margin: 0 auto;
}
.form-input{
  padding: 8px;
}
.form-input input{
  padding: 10px;
  border-radius: 8px;
  width: 79%;
  margin-right: 10px;
  border: 1px solid;
  font-size: 18px;
}
.form-input button{
  /* padding: 10px; */
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  border: 0px;
  background-color: #4b7bec;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
.btn-gb{
  background-color: red;
}
.btnSucess{
  background-color: #4834d4;
  color: white;
}
/* MARK Done */
.sucess{ /* Change BG*/
  background-color: #7ed6df;
  color: rgb(255, 255, 255);
}
.btnSucess{
  background-color: #4834d4;
  color: white;
}
.line{
  text-decoration: line-through;
  text-decoration-color: rgb(164, 176, 190);
}
</style>
