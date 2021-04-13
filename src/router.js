import Vue from 'vue'
import VueRouter from './vue-router'
// 桥梁
// 想要别vue使用的工具或插件必须通过use方法
// use方法会调用要被vue使用的工具或插件上的instal方法，同时会将vue传递过去
// 毕竟要被vue使用的工具或插件要用的vue
Vue.use(VueRouter)

Vue.config.productionTip = false
// 定义路由
// 路由表 将其当做router的配置参数
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