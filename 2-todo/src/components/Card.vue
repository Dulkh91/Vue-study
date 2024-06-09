<template>
    <div class="card">
        <div class="txt">{{ content }}</div>
        <slot></slot>
    </div>
</template>

<script setup>
    name: 'Card'
   const props = defineProps({
    content: {
        type: String
    }
   })
</script>

<style>
.card{
    width: 100%;
    background-color: #ecf0f1;
    color: black;
    border-radius: 8px;
    display: flex;
    margin: 5px;
}
.card .txt,.btn-box{
    display: flex;
    padding: 10px;
    font-size: 18px;
    align-items: center;
}
.card .btn-box{
   margin-left: auto;
}
.card .btn-box button{
    font-size: 18px;
    margin-left: 5px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    border: 0px;
    padding-left: 20px;
    padding-right: 20px;
}
.card .btn-box .btn-check{
    background-color: #c3c3c3;
    color: white;
}
.card .btn-box .btn-cross{
    background-color: #eb3b5a;
    color: white;
}
</style>