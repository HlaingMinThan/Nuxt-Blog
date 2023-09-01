<template>
  <div class="pb-5 border-0 border-b-2 border-gray-200">
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">
        <NuxtLink to="/posts/1">{{post.title}}</NuxtLink>
      </h1>
      <div class="flex space-x-2 items-center">
        <p>{{post.user.name}}</p>
        <p class="text-gray-500 text-sm">{{moment(post.created_at).fromNow()}}.</p>
      </div>
      <p class="line-clamp-2">
        {{post.body}}
      </p>
    </div>
    <NuxtLink
      :to="`/posts/${post.id}`"
      class="bg-blue-500 px-4 py-3 rounded-lg text-white inline-block mt-5 hover:opacity-60"
      >Read More</NuxtLink
    >
  </div>
</template>

<script setup>
import moment from 'moment';

defineProps( {
  post : Object
})
</script>