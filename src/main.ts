import '@/assets/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import { router } from '@/router'

const store = createStore({})

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(store).use(router).mount('#app')
