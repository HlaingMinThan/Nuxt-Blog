export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  nuxtApp.provide('apiFetch', $fetch.create({ baseURL: runtimeConfig.public.backendURL }));
});