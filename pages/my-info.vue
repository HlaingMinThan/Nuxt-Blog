<template>
  <div class="flex items-center flex-col" v-if="user">
    <h1 class="text-2xl font-bold">My Info</h1>
    <p>Name - {{user.name}}</p>
    <p>email - {{user.email}}</p>
  </div>
</template>

<script setup>
let {$apiFetch} = useNuxtApp();
let user = ref(null);
onMounted(async() => {
    let response = await $apiFetch('/api/user');
    user.value = response;
})
</script>