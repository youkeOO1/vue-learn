import link from './link';
import view from './view'
export default function install(Vue) {
    Vue.mixin({
        beforeCreate(){
            // console.log(this.$options.router)
            /**
             * 找到根实例上的router
             */
            if(this.$options.router){
                this._router = this.$options.router
                // this._route = this._router.history.current;
                // 一旦属性值改变啦页面就会进行重新渲染
                Vue.util.defineReactive(this,'_route',this._router.history.current)
            }
        }
    })
    /**
     * Object.defineProperty(Vue.prototype, '$router', {}
     * 中的this指向 由于有属性描述get会将this传入，那吗他的this 就指向Vue的实例 
     */
    Object.defineProperty(Vue.prototype, '$router', {
        get() {
            return this.$root._router;
        }
    })
    Object.defineProperty(Vue.prototype,'$route',{
        get(){
            return this.$root._route;
        }
    })
    // 会显示找不到router-link 与 router-view 两个组件
    Vue.component('router-link', link )
    Vue.component('router-view', view )

}