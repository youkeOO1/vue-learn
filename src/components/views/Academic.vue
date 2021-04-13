<template>
    <div>
        <ul class="quesiton-warp">
            <router-link class="question-item" tag="li" v-for="question in data" :key="question.id" :to="{name:'question',params:{
                id:question.id
            }}">
                {{ question.title }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:null,
        }
    },

    methods:{
        getData(){
            this.$axios.get('/question').then(res =>{
                this.data = res;
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style scoped>
    ul,li{
        list-style: none;
    }
    li{
        text-align: left;
        line-height: 30px;
        cursor: pointer;
    }
    li:hover{
        color: #3385ff;
        text-decoration: underline;
    }
</style>