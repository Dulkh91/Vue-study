<template>
    <h1>Page posts</h1>
    <ul>
        <li v-for="posts in postsData">
            <router-link :to="`/postdetail/${posts.id}`"> {{ posts.title }}</router-link>
        </li>
        
    </ul>
</template>

<script setup>
    import {ref} from 'vue'

    const postsData = ref([
        {
            id: 'id1',
            title: "Cambodia"
        },
        {
            id: 'id2',
            title: "Thailand"
        },
        {
            id: 'id3',
            title: "Vietnam"
        },
        
    ])

</script>