<template>
    <nav class="bg-white p-5 flex justify-between items-center container mx-auto">
            <h1 class="text-3xl font-bold"><NuxtLink to="/" >Logo</NuxtLink></h1>
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
</template>