import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Tdesign from 'tdesign-vue-next'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Tdesign)

app.mount('#app')
