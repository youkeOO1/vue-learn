<template>
    <div>
        学生列表
        <ul>
            <li v-for="student in studentList" :key="student.id">
                姓名：{{ student.name}}
                年龄：{{ student.age}}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['studentList'])
    }
}
</script>