export default defineNuxtRouteMiddleware((to, from) => {
    let {isLoggedIn} = useAuth();
    if(process.client && isLoggedIn.value) {
        return navigateTo('/my-info')
    }
})