import Main from "@/pages/Main.vue"
import PostsPage from "@/pages/PostsPage.vue"
import About from "@/pages/About.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
    },
    {
        path: '/posts',
        component: PostsPage,
        name: 'PostsPage',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;