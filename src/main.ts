import { createApp } from 'vue'
// 导入element-plus包
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import store from './vuex/store'
import App from './App.vue'

const app = createApp(App)
// 使用包，在导入app前
app.use(ElementPlus)
// 使用路由
app.use(router)
// 使用状态管理
app.use(store)

app.mount('#app')
