<template>
  <div class="pb-5 border-0 border-b-2 border-gray-200">
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">
        <NuxtLink to="/posts/1">Title of the post</NuxtLink>
      </h1>
      <div class="flex space-x-2 items-center">
        <p>Hlaing Min Than</p>
        <p class="text-gray-500 text-sm">Feb 2,2022.</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis
        ipsum enim aspernatur maiores ab nihil officia numquam. Excepturi eum
        velit impedit ipsa quam unde exercitationem explicabo odio fugit
        adipisci!
      </p>
    </div>
    <NuxtLink
      to="/posts/1"
      class="bg-blue-500 px-4 py-3 rounded-lg text-white inline-block mt-5"
      >Read More</NuxtLink
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>