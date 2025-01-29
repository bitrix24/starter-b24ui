import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@bitrix24/b24ui-nuxt',
    // `@bitrix24/b24jssdk-nuxt`,
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})