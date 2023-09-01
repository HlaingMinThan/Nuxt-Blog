<template>
    <div class="max-w-xl mx-auto">
        <h1 class="text-center text-3xl font-bold">Edit post</h1>
        <ul class="my-5">
            <li v-for="(err,i) in errors" :key="i" class="text-red-500">{{err}}</li>
        </ul>
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
                <button type="submit" class="bg-blue-500 px-3 py-2 rounded-lg text-white">Update</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    definePageMeta({
    middleware : ['auth']
    })
    let route = useRoute();
    let title = ref('');
    let body = ref('');
    let errors = ref([]);
    let isLoading = ref(false);
    let {$apiFetch} = useNuxtApp();
    let router = useRouter();
    let submit = async () => {
        try {
            isLoading.value = true;
            await $apiFetch(`/api/posts/${route.params.id}/update`, {
                method : 'PATCH',
                    body : {
                        title: title.value,
                        body:body.value
                    }
                })
            isLoading.value = false;
            title.value =  '';
            body.value =  '';
            router.push('/my-info');
        }catch (e) {
            errors.value = Object.values(e.data.errors).flat();
        }
    }
    //set edit form values
    onMounted( async () => {
        let post  = await $apiFetch(`/api/posts/${route.params.id}`);
        title.value = post.title
        body.value = post.body
    })
</script>
