// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
      title: 'Gợi ý cho bạn các gói cước tốt nhất! Đăng ký nhanh chóng, tiện lợi',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'description',
          content: 'Lựa chọn gói cước data phù hợp với nhu cầu, thao tác dễ dàng, nhanh chóng, ứng cứu data',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'og:title',
          content: 'Gợi ý cho bạn các gói',
        },
        {
          name: 'og:description',
          content: 'Lựa chọn gói cước data phù hợp với nhu cầu, thao tác dễ dàng, nhanh chóng, ứng cứu data',
        },
        {
          name: 'og:image',
          content: '/img/kc90.jpg',
        },
      ],
    },
  },

  modules: ['@unocss/nuxt', '@nuxt/ui', '@nuxtjs/color-mode'],

  css: ['~/assets/tailwind.css', '~/assets/global.css'],

  devServer: { host: 'http://localhost:3000' },
  devtools: { enabled: true },
})
