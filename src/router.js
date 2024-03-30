import { createRouter, createWebHistory } from "vue-router";
import AppSearched from './pages/AppSearched.vue'
import AppNotFound  from './pages/AppNotFound.vue'
import AppShowApartment from './pages/AppShowApartment.vue';

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
            path: '/searched',
            name: 'search-apartments',
            component: AppSearched
        },
        {
            path: '/apartment/:slug/:id',
            name: 'apartment',
            component: AppShowApartment
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        },
    ]
})

export { router };