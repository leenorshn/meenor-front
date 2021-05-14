export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "meenor",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/v-calendar.js", ssr: false },
    { src: "~plugins/vue-chart.js", ssr: false },
    { src: "~plugins/circle-chart.js", ssr: false },
    {src:'~/plugins/alt-apollo-config.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "~/components", extensions: ["vue"] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-highcharts",
    '@nuxtjs/apollo',
  ],
  
    apollo: {
      // Sets up the apollo client endpoints
      clientConfigs: {
        default:{
          httpEndpoint: 'http://localhost:4000',
         // wsEndpoint: 'ws://localhost:4000'
        }
        
      },
      // // setup a global query loader observer (see below for example)
      // watchLoading: '~/plugins/apollo-watch-loading-handler.js',
      
      // // setup a global error handler (see below for example)
      // errorHandler: '~/plugins/apollo-error-handler.js',
  
      // Sets the authentication type for any authorized request.
      authenticationType: 'Bearer', 
  
      // Token name for the cookie which will be set in case of authentication
      tokenName: 'apollo-token',
  
      // [deprecated] Enable the graphql-tag/loader to parse *.gql/*.graphql files
      includeNodeModules: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: []
  },
  middleware:["~/middleware/isAuth.js"]
};
