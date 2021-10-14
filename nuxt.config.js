export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "inwi-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-mask.js" },
    { src: "~/plugins/axios" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "vue-toastification/nuxt",
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    responseType: 'json',
    common: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    proxy: true
  },
  
  proxy: {
    "/api/": {
      target: "http://rct-myinwi.blanc.tech/"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
