import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();

new Vue({
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