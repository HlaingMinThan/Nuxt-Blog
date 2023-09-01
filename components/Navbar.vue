<template>
    <nav class="bg-white p-5 flex justify-between items-center container mx-auto">
            <h1 class="text-3xl font-bold"><NuxtLink to="/" >Logo</NuxtLink></h1>
            <ul class="flex space-x-10 text-lg items-center">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/my-info">My Info</NuxtLink>
                </li>
                <!-- on auth state -->
                <li>
                    <NuxtLink to="/posts/create" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Create</NuxtLink>
                </li>
                <li>
                    <button @click="logout" class="bg-red-500 px-3 py-2 rounded-lg text-white">Logout</button>
                </li>
                <!-- on non     auth state -->
                <li>
                    <NuxtLink to="/login" class="border px-3 py-2 rounded-lg">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/register" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Register</NuxtLink>
                </li>
            </ul>
        </nav>
</template>

<script setup>
let {$apiFetch} = useNuxtApp();
let router = useRouter();
let {removeUser} = useAuth();
let logout = async () => {
    try {
        await $apiFetch('/api/logout', {
            method : "POST"
        });
        removeUser();
        router.push('/')
    }catch(e) {
        console.log(e)
    }
}
</script>