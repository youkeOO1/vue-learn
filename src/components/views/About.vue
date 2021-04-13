<template>
    <div class="about">
        <div>关于</div>
        <router-link to="/home#center" tag="div" class="home-hash">首页锚点</router-link>
        <router-link to="/" tag="div" class="bottom"> 回到首页 </router-link>
    </div>
</template>
<style scoped>
    .home-hash{
        margin-top: 100px;
    }
    .bottom{
        margin-top: 1000px;
        cursor: pointer;
    }
</style>