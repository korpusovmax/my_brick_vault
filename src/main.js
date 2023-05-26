import { createApp } from 'vue'
import App from './App.vue'
import HomePage from "@/HomePage.vue";
import { createRouter, createWebHistory} from "vue-router";
import DetailsPage from "@/DetailsPage.vue";
import SetsPage from "@/SetsPage.vue";
import SearchPage from "@/SearchPage.vue";


const app = createApp(App);
const routes = [
    // { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage, name: 'home' },
    { path: '/details', component: DetailsPage, name: 'details' },
    { path: '/sets', component: SetsPage, name: 'sets' },
    { path: '/search', component: SearchPage, name: 'search' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router);
app.mount('#app')
