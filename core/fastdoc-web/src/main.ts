import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createIcons } from '@/fontawesome'

const app = createApp(App)
// 注册 fontawesome
createIcons(app)
// 注册 ElementPlus
app.use(ElementPlus)
app.use(router)
app.mount('#app')
