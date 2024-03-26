import { createRouter, createWebHistory } from "vue-router";
import AppSearched from './pages/AppSearched.vue'

const router = createRouter({
    history: createWebHistory(),

    routes:[
        /* 
            {
                path: '/',
                name: 'home',
                component: AppHome
            }
        */
       {
            path: '/searched/:value',
            name: 'Search apartments',
            component: AppSearched
       }
    ]
})

export { router };