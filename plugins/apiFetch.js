import Cookies from 'js-cookie';

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();
    nuxtApp.provide('apiFetch', $fetch.create({ 
      baseURL: runtimeConfig.public.backendURL ,
      credentials : 'include' , 
      headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      }
    }));
});