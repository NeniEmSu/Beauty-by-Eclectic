import data from './static/storedata.json'
const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://kit.fontawesome.com/41fc25a21c.js'
    }]
  },

  loading: {
    color: '#fff'
  },

  css: [
    'normalize.css/normalize.css',
    'aos/dist/aos.css',
    '@/assets/css/styles.css'
  ],

  plugins: [{
    src: '~/plugins/aos.js',
    mode: 'client'
  },

  '~/plugins/globalComponents'
  ],

  buildModules: [

    '@nuxtjs/eslint-module'
  ],

  generate: {
    routes: dynamicRoutes
  },

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources'
  ],

  axios: {},

  styleResources: {
    scss: [
      '~/assets/scss/_config.scss'
    ]
  },

  build: {

    extend (config, ctx) {}
  }
}
