<template>
    <div class="student-show">
        <div>添加学生:</div>
        <div class="studentName">
            <label for="">姓名:</label>
            <input type="text" v-model="name">
        </div>
        <div class="studentAge">
            <label for="">年龄:</label>
            <input type="text" v-model="age">
        </div>
        <button @click="handleClick">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            age:''
        }
    },
    methods:{
        handleClick(){
            const { name , age } = this;
            this.$store.state.studentList.push({
                name,
                age,
                id: +new Date()
            })
            console.log(this.$store.state.studentList)
        }
        
    }

}
</script>