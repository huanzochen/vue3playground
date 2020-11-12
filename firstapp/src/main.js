// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// const app = new Vue({ el: '#app', router, render: h => h(App) })
const app = createApp(App)
app.use(router)
app.mount('#app')