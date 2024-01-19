// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiUrl: '',
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  modules: [
    // pinia
    '@pinia/nuxt',
    // vee-validate
    '@vee-validate/nuxt',
    // nuxt/ui
    '@nuxt/ui',
    // vuetify setting
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: vuetifyのdefault設定
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  experimental: {
    typedPages: true
  }
});
