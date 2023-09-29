// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/ui", "@nuxtjs/color-mode"],

  css: ["~/assets/tailwind.css", "~/assets/global.css"],

  devServer: { HOST: process.env.devUrl },
  devtools: { enabled: true },
});
