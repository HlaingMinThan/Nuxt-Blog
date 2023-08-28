<template>
    <div v-for="post in posts" :key="post.id" class="py-8"> 
        <PostItem :post="post"/>
    </div>
</template>

<script setup>
    const { data : posts } = await useFetch('http://localhost:8000/api/posts');
</script>