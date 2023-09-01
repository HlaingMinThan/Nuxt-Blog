<template>
    <div v-for="post in posts" :key="post.id" class="py-8"> 
        <PostItem :post="post"/>
    </div>
</template>

<script setup>
    let {$apiFetch} = useNuxtApp();
    const posts = await $apiFetch('/api/posts');
</script>