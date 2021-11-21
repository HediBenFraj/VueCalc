import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Favorites from './pages/Favorites'
import Header from './components/Layout/Header'
// import './assets/css/tailwind.css'
import './assets/tailwind.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('app-header',Header)
app.component('app-fav',Favorites)
app.mount("#app")