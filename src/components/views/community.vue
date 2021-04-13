<template>
    <div class="community">
        <router-link  :to="{name:'academic'}">学术讨论</router-link>
        <router-link  :to="{name:'personal'}">个人中心</router-link>
        <router-link  :to="{name:'download'}">资源下载</router-link>
        <div class="community-view">
            <router-view></router-view>
        </div>
    </div>
    
</template>
<style scoped>
/* 添加样式 */
a{
    text-decoration: none;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 10px;
    color: #000;
}
/* 添加完全配置样式 */
a.router-link-exact-active{
    background: #3385ff;
    color: #fff;
    font-weight: 500;
}
.community-view{
    margin-top: 20px;
}
</style>