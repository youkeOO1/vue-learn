/**
 * 等效于
 * Vue.component('router-link',{})
 */
export default {
    // 接受元素传递过来的hash路径，以及元素名字 
    props: {
        to:{
            type: String,
            required: true,
        },
        tag:{
            type:String,
            default:'a'
        }
    },

    methods:{
        handleClick(){
            const mode = this.mode;
            if(mode === 'hash'){
                location.hash = this.to;
            }else{
                history.pushState(null,null,this.to)
                this.$router.history.current.path = this.to;
            }
            
        }
    },
    
    // 渲染
    render(h) {
        const to = this.to;
        const tag = this.tag;
        const data  = {}
        const mode = this.mode;
        // 当为其a元素时 使用的hash来修改的路由，
        // 当不是a元素时，通过history模式（就是当触发单击事件时，将其路由修改）
        if(tag === 'a' && mode === 'hash'){
            const href = '#' + to
            data.attrs = { href }
        }else{
            data.on = { click: this.handleClick }
        }
        // 渲染元素， 特性， 以及需要显示的信息
        return h(this.tag, data, this.$slots.default)
    }
}