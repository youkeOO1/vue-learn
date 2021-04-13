<template>
    <div class="show">学员展示
        <student-add></student-add>
        <hr>
        <student-show></student-show>
        
    </div>
</template>
<script>
import studentAdd from '@/components/studentAdd';
import studentShow from '@/components/studentShow'
export default {
    components:{
        studentAdd,
        studentShow
    }
}
</script>