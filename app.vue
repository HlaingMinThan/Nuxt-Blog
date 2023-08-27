<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

</template>

<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - CreativeCoder` : 'CreativeCoder';
    }
})
</script>