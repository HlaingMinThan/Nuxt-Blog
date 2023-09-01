<template>
    <div class="max-w-xl mx-auto">
        <h1 class="text-center text-3xl font-bold">Login</h1>
        <ul class="my-5">
            <li v-for="(err,i) in errors" :key="i" class="text-red-500">{{err}}</li>
        </ul>
        <form @submit.prevent="submit">
            <div class="space-y-3">
                <label for="">Email</label>
                <input type="text" v-model="email" class="border w-full py-2">
            </div>
            <div class="space-y-3">
                <label for="">Password</label>
                <input type="text" v-model="password" class="border w-full py-2">
            </div>
            <div class="mt-3">
                <span v-if="isLoading">loading...</span>
                <button type="submit" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    let email = ref('');
    let password = ref('');
    let errors = ref([]);
    let isLoading = ref(false);
    let {$apiFetch} = useNuxtApp();
    let router = useRouter();
    let csrf = () => {
        return $apiFetch('/sanctum/csrf-cookie');
    }
    let {setUser} = useAuth();
    let submit = async () => {
        try {
            await csrf();
            isLoading.value = true;
            await $apiFetch('/api/login', {
                method : 'POST',
                    body : {
                        email: email.value,
                        password:password.value
                    }
            })
            let user = await $apiFetch('/api/user');
            setUser(user.name);
            isLoading.value = false;
            email.value =  '';
            password.value =  '';
            router.push('/my-info');
        }catch (e) {
            isLoading.value = false;
            errors.value = Object.values(e.data.errors).flat();
        }
    }
</script>
