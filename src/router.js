import { createRouter, createWebHistory } from "vue-router";
import AppSearched from './pages/AppSearched.vue'
import AppNotFound  from './pages/AppNotFound.vue'

import AppHome from './pages/AppHome.vue'

const router = createRouter({
    history: createWebHistory(),

    routes:[
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/searched/:address',
            name: 'search-apartments',
            component: AppSearched
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        },
    ]
})

export { router };