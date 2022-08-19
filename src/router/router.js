import Main from "@/pages/Main.vue"
import PostsPage from "@/pages/PostsPage.vue"
import PostIdPage from "@/pages/PostIdPage.vue"
import About from "@/pages/About.vue"
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue"

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
    {
        path: '/store',
        component: PostsPageWithStore,
        name: 'PostIdPage',
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;