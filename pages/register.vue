<template>
    <div class="max-w-xl mx-auto">
        <h1 class="text-center text-3xl font-bold">Register</h1>
        <ul class="my-5">
            <li v-for="(err,i) in errors" :key="i" class="text-red-500">{{err}}</li>
        </ul>
        <form @submit.prevent="submit">
            <div class="space-y-3">
                <label for="">Name</label>
                <input type="text" v-model="name" class="border w-full py-2">
            </div>
            <div class="space-y-3">
                <label for="">Email</label>
                <input type="text" v-model="email" class="border w-full py-2">
            </div>
            <div class="space-y-3">
                <label for="">Password</label>
                <input type="text" v-model="password" class="border w-full py-2">
            </div>
            <div class="space-y-3">
                <label for="">Password Confirm</label>
                <input type="text" v-model="passwordConfirm" class="border w-full py-2">
            </div>
            <div class="mt-3">
                <span v-if="isLoading">loading...</span>
                <button type="submit" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    definePageMeta({
    middleware : ['guest']
    })
    let name = ref('');
    let email = ref('');
    let password = ref('');
    let passwordConfirm = ref('');
    let errors = ref([]);
    let isLoading = ref(false);
    let {$apiFetch} = useNuxtApp();
    let router = useRouter();
    let csrf = () => {
        return $apiFetch('/sanctum/csrf-cookie');
    }
    let submit = async () => {
        try {
            await csrf();
            isLoading.value = true;
            await $apiFetch('/api/register', {
                method : 'POST',
                    body : {
                        name: name.value,
                        email: email.value,
                        password:password.value,
                        password_confirmation:passwordConfirm.value
                    }
                })
            let {setUser} = useAuth();
            let user = await $apiFetch('/api/user');
            setUser(user.name);
            isLoading.value = false;
            email.value =  '';
            password.value =  '';
            window.location.pathname = '/my-info';
        }catch (e) {
            isLoading.value = false;
            errors.value = Object.values(e.data.errors).flat();
        }
    }
</script>
