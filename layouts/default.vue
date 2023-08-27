<template>
    <div>
        <nav class="bg-white p-5 flex justify-between items-center container mx-auto">
            <h1 class="text-3xl">Logo</h1>
            <ul class="flex space-x-10 text-lg">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="bg-gray-100 h-screen w-full">
            {{$slot}}
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>