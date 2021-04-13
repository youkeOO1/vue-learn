<template>
    <div v-if="data">
        <div class="title">
            {{ data.title }}
        </div>
        <div class="option" >
            <div class="option-item" @click="handleClick(options.id)" v-for="options in optionQusetinList" :key="options.id" :title="options.title" :class="options.type"> {{ options.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    // 接受传递过来的参数
    props:{
        id:{
            type:[String,Number],
        },
        name:{
            type:String,
            
        }
    },
    data(){
        return {
            data:null
        }
    },
    mounted(){
        this.getData(this.id)
    },
    computed:{
        /**
         * 计算属性
         * 下一篇文章与上一篇的文章
         */
        optionQusetinList(){
            let arr = []
            if(this.data.next){
                const {next,nextId} = this.data
                arr.push({
                    type:'next',
                    title:next,
                    id:nextId,
                })
            }
            if(this.data.prev){
                const {prev ,prevId} = this.data
                arr.push({
                    type:'prev',
                    title:prev,
                    id:prevId,
                })
            }
            return arr
        }
    },
    methods:{
        /**
         * 获取数据
         */
        getData(id){
            
            console.log(id)
            this.$axios.get(`/question/${id}`).then(res =>{
                this.data = res

            })
        },
        /**
         * 触发单击事件修改路由
         */
        handleClick(id){
            const { name } = this
            this.$router.push({name,params:{id}})
        }
    },
    /**
     * 监听路由信息是否被修改
     * 当路由信息被修改后重新获取数据
     */
    // watch:{
    //     '$route':{
    //         handler(){
    //             this.getData()
    //         },
    //         immediate: true
    //     }
    // },
    
    beforeRouteUpdate (to,from,next){
        
        this.getData(to.params.id)
        console.log(to)
        next()
    }
}
</script>
<style scoped>
.option{
    width: 80%;
    height: 30px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: 10px auto;
}
.option-item{
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3385ff;
    cursor: pointer;
}
.option-item:hover{
    color: red;
}
.option-item.next{
    float: right;
}
.option-item .right{
    float: left;
}
</style>