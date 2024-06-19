<template>
    <h1>Page post detail</h1>
    <p><b>This post with by ID {{ $route.params.id }}</b></p>

    <button @click="showId">Click Show ID </button>

    <button @click="toFirstPost">Go to first post</button>
    <p><RouterLink to="/posts">&lt; BACK</RouterLink> </p>
 
</template>
<script setup>
import { useRoute,useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const showId = ()=>{
    alert(`The ID is ${route.params.id}`)
}
const toFirstPost = ()=>{
    router.push({
        name: 'detail',
        params:{
            id: 'id1'
        }
    })
}
</script>