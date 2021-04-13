import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from './http'
import auth from './components/utils/auth'
Vue.prototype.$axios = axios;

// 使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false
// 定义路由
const routes = [
    {
        path:'/',
        // 当输入域名访问是，将其其路径重定向为/home
        redirect:'/home'
    },
    {
        path: '/home',
        // 异步加载组件，当标签被点击才会加载组件
        component: () => import('./components/views/Home.vue'),
        // 别名
        // 别名是 URL中的路径是“/home” 但路由匹配的则为“/” 
        // 但是如何是访问当用于只输入域名没有跟参数时回无效
        // 建议使用重定向
        // alias:'/'
    },
    {
        path: '/learn',
        // component: () => import('./components/views/Learn.vue')
        // 展示多个命令视图
        // 默认展示名为default视图
        components:{
            default: () => import('./components/views/Learn.vue'),
            // view: () => import('./components/views/Academic.vue'),
        }
    },
    {
        path: '/show',
        // component: () => import('./components/views/Show.vue')
        components:{
            default: () => import('./components/views/Show.vue'),
            view: () => import('./components/views/About.vue')
        }
    },
    {
        path: '/about',
        component: () => import('./components/views/About.vue'),
        meta:{
            requiresLogin:true
        }
        // beforeEnter:(to,form,next) =>{a
        //     console.log('beforeEnter')
        //     next()
        // }
    },
    {
        path: '/community',
        name:'community',
        component: () => import('./components/views/community.vue'),
        // 重定向
        // 当单击社区时默认选中学术讨论
        // 第一种
        // redirect:'/community/academic',
        // 第二种 通过命令路由
        // redirect: { name:'academic'},
        // 第三种 通过方法
        redirect:to =>{
            return {
                name:'academic'
            }
        },
        // 路由嵌套
        children:[
            {
                path:'academic',
                // 命名路由
                name:'academic',
                meta:{
                    requiresLogin: true
                },
                component:()=> import('./components/views/Academic.vue')
            },
            {
                path:'personal',
                name:'personal',
                component: () => import('./components/views/Personal.vue')
            },
            {
                path:'download',
                name:'download',
                component: () => import('./components/views/Download.vue')
            },
        ]
    },
    {
        /**
         * 动态路由匹配
         * /question/下的参数都将是question.vue 渲染出来的
         */
        path:'/question/:id',
        name:'question',
        props:route =>({
            name:route.name,
            id: route.params.id,
        }),
        component:() => import('./components/views/question.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import('./components/views/Login.vue')
    }

]

// 创建实例
const router =  new VueRouter({
    mode: 'history',
    routes,
    // 单页应用，会在一个HTML文件里绘制所有页面，当进行跳转时不会到该跳转页的首屏，而是跳转前页面的滚动条滚动的位置，跳转页面的滚动位置就会等于跳转前滚动位置
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            // 当也会回退或前进时恢复之前或之后的页面状态
            return savedPosition
        }else{
            // 当有hash值 跳转到页面hash值得地方 hash值也就是锚点
            if(to.hash){
                return { selector : to.hash}
            }else{
                // 当没有锚点默认到首屏
                return {x: 0, y: 0}
            }
        }
    }
})
router.beforeEach((to,from,next) =>{
    let isRequiresLogin = to.matched.some(item => item.meta.requiresLogin)
    if(isRequiresLogin){
        const isLogin = auth.isLogin()
        if(isLogin){
            next()
        }else{
            // 
            const result =  window.confirm('请登录')
            if(result){
                next('/login')
            }
        }
    }else{
        next()
    }
})
export default router;
