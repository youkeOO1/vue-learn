<template>
    <div class="home">首页
        <button @click="handleClick">{{count}}</button>
        <!-- <button @click="handleClick">{{storeCount}}</button> -->
    </div>  

</template>
<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {
            // 当使用这种格式时，组件内数据修改，vuex中的数据不会修改
            // count:this.$store.state.count,
        }
    },
    computed:{
        // 当触发单击事件时只会改变组件内count值
        ...mapState(['count'])
        // 重命名
        // ...mapState({
        //     // storeCount:'count',
        // })
        // 重命名加对数据修改
        // ...mapState({
        //     storeCount:state => state.count + 10 ,
        // })

    },
    methods:{
        handleClick(){
            this.$store.state.count++
            console.log(this.$store.state)
        }
    },
    created(){
    }
}
</script>