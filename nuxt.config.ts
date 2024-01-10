// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/theme/variables.css",
  ],
  devtools: { 
    enabled: true,
  },
  // NOTE: need to set this because of a bug in Nuxt / Nuxt Ionic module. See link below.
  // https://github.com/nuxt-modules/ionic/issues/484
  modules: [
    '@nuxtjs/ionic',
  ],
  ssr: false,
  typescript: {
    shim: false,
  },
})
