export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  runtimeConfig: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  }
});
