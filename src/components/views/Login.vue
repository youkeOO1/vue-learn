<template>
    <div>
        <button @click="updataLoginState">{{ showState }}</button>
    </div>
</template>
<script>
/**
 * 两种状态
 * 第一种是未登录状态，单击将其修改为登录状态
 * 第二种是已登录状态，单击将其切换为未登录状态
 */
import auth from '../utils/auth'
export default {
    data(){
        return{
            state:auth.isLogin(),
        }
    },
    computed:{
        showState(){
            return this.state ? '注销':'登录';
        }
    },
    methods:{
        updataLoginState(){
            /**
             * 当state为true时说明已经登录啦，将其cookie删除
             * 当state为false时说明未登录，添加cooker记录
             */
            if(this.state){
                // 已经登录，注销登录
                auth.deleteLogin()
                
            }else{
                // 未登录 ， 添加登录记录
                auth.addLogin()
                const result = window.confirm('是否离开')
                if(result) this.goBack()
                
            }
            this.state = !this.state
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>