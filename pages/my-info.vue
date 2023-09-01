<template>
  <div class="flex items-center flex-col" v-if="user">
    <h1 class="text-3xl font-bold my-3">My Info</h1>
    <p>Name - {{user.name}}</p>
    <p>email - {{user.email}}</p>
    <h1 class="text-2xl font-bold my-3">My posts</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <NuxtLink :to="`/posts/${post.id}`" class="text-blue-500 underline">{{post.title}}</NuxtLink>
            - 
            <NuxtLink :to="`/posts/${post.id}/edit`" class="text-blue-500 underline">edit</NuxtLink> &nbsp;
            <button @click="deletePost(post.id)" class="text-red-500 underline">delete</button>
        </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  middleware : ['auth']
})
let {$apiFetch} = useNuxtApp();
let user = ref(null);
let posts = ref([]);
let router = useRouter();
let getPosts =  async () => {
  posts.value = await $apiFetch('/api/user/posts');
}
onMounted(async() => {
    user.value = await $apiFetch('/api/user');
    getPosts()
})

let deletePost = async (id) => {
  await $apiFetch(`/api/posts/${id}/delete`, {
    method : "DELETE"
  });
  getPosts();
}
</script>