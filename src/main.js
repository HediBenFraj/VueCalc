import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Favorites from './views/Favorites'
import Header from './components/Header'




const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
app.component('app-header',Header)
app.component('app-fav',Favorites)