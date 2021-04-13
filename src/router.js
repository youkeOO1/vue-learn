import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false
// 定义路由
const routes = [
    {
        path: '/',
        // 异步加载组件，当标签被点击才会加载组件
        component: () => import('./components/views/Home.vue')
    },
    {
        path: '/learn',
        component: () => import('./components/views/Learn.vue')
    },
    {
        path: '/show',
        component: () => import('./components/views/Show.vue')
    },
    {
        path: '/about',
        component: () => import('./components/views/About.vue')
    },
    {
        path: '/community',
        component: () => import('./components/views/community.vue')
    },
]

// 创建实例
export default new VueRouter({
    mode: 'history',
    routes,
})