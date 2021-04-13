import History from './history'
import install from './install'
class VueRouter {
    constructor(option){
        //接受路由表
        this.routes = option.routes;
        // 将其路由表格式成容易操作的对象
        // key : 路径
        // value: 子组件
        this.routeMap =  this.createRouterMap(this.routes) || []
        this.history = new History()
        this.mode = option.mode || 'hash'
        this.init()
    }
    /**
     * 将其路由表格式化为对象
     * 格式为: {路径：子组件 ...}
     * @param { Array } routes 路由表
     * @returns 返回一个对象
     */
    createRouterMap(routes){
        let routeMap = {}
        for (let i = 0; i < routes.length; i++) {
            let routesItem = routes[i]
            routeMap[routesItem.path] = routesItem.component
            
        }
        return routeMap
    }
    init(){
        if(this.mode === 'hash'){
            location.hash ? '' : location.hash = '/'
            // 第一次页面加载的时候视图是空的
            document.addEventListener('DOMContentLoaded', () => {
                this.history.current.path = location.hash.slice(1)
            })
            // 监听hash是否改变
            window.addEventListener('hashchange', () => {
                this.history.current.path = location.hash.slice(1)
            })
        }else{
            // 第一次页面加载的时候视图是空的
            document.addEventListener('DOMContentLoaded', () => {
                this.history.current.path = location.pathname
            })
            // 修复浏览器无法前进与后退
            window.addEventListener('popstate',() =>{
                this.history.current.path = location.pathname
            })
        }

        
    }
    

}

// use 会默认调用函数中的install方法
VueRouter.install = install;
export default VueRouter