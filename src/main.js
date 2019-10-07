import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

export const serverBus = new Vue();

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})


// src/plugins/vuetify.js

// import Vue from 'vue'
// import Vuetify, {
//   VCard,
//   VRating,
//   VToolbar,
// } from 'vuetify/lib'
// import { Ripple } from 'vuetify/lib/directives'

// Vue.use(Vuetify, {
//   components: {
//     VCard,
//     VRating,
//     VToolbar,
//   },
//   directives: {
//     Ripple,
//   },
// })

// const opts = {}

// export default new Vuetify(opts)