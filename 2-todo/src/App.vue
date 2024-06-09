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
 import { ref } from 'vue';
 import { v4 as uuidv4 } from 'uuid';

 //MARK: To Do
 const todos = ref([
    {
        id: 'id1',
        article: 'Cooking Rice',
        done: false
    },
    {
        id: 'id2',
        article: 'Read book',
        done: true
    }
])
//MARK: Add To Do
const newArticleTodo = ref()
const addTodo = ()=>{
    const newTodo ={
        id: uuidv4(),
        article: newArticleTodo.value,
        done: false
    }
    todos.value.unshift(newTodo)
    newArticleTodo.value = ''
}
//MARK: Delete To Do
const deleteTodo = id =>{
    todos.value = todos.value.filter(todo => todo.id !== id)
}
//MARK: Mark Done
const toggleBtn = id =>{
    const index = todos.value.findIndex(todo =>todo.id == id)
    todos.value[index].done = !todos.value[index].done
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
