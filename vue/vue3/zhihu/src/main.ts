import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(Antd).use(router).mount('#app')
