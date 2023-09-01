<template>
    <div class="space-y-4">
      <h1 class="text-3xl font-bold text-center">
        {{post.title}}
      </h1>
      <div class="flex space-x-2 items-center justify-center">
        <p>{{post.user.name}}</p>
        <p class="text-gray-500 text-sm">{{moment(post.created_at).fromNow()}}.</p>
      </div>
    </div>
      <p class="mt-10">
       {{post.body}}
      </p>
</template>

<script setup>
import moment from 'moment';
let route = useRoute();
let {$apiFetch} = useNuxtApp();
useHead({
    title : 'About'
})
const post = await $apiFetch('/api/posts/'+route.params.id)
</script>