<template>
    <div class="max-w-xl mx-auto">
        <h1 class="text-center text-3xl font-bold">create post</h1>
        <form @submit.prevent="submit">
            <div class="space-y-3">
                <label for="">Title</label>
                <input type="text" v-model="title" class="border w-full py-2">
            </div>
            <div class="space-y-3">
                <label for="">Body</label>
                <textarea name="" v-model="body" id="" cols="30" rows="10" class="border w-full py-2"></textarea>
            </div>
            <div class="space-y-3">
                <span v-if="isLoading">loading...</span>
                <button type="submit" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Create</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    let title = ref('');
    let body = ref('');
    let isLoading = ref(false);
    let {$apiFetch} = useNuxtApp();
    let router = useRouter();
    let submit = async () => {
        isLoading.value = true;
        await $apiFetch('/api/posts', {
            method : 'POST',
                body : {
                    title: title.value,
                    body:body.value
                }
            })
        isLoading.value = false;
        title.value =  '';
        body.value =  '';
        router.push('/');
    }
</script>
