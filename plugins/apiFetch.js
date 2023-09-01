export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('apiFetch', $fetch.create({ baseURL: 'http://localhost:8000' }));
});