<template>
	<div id="app">
		<div class="nav-box">
			<div class="logo" @click="handleClick">zxt</div>
			<!-- <router-link  to="/home" tag="div" class="logo" >ZXT</router-link> -->
			<div class="nav-list">
				<router-link  to="/home">首页</router-link>
				<router-link  to="/learn">课程学习</router-link>
				<router-link  to="/show">学员展示</router-link>
				<router-link  to="/about">关于</router-link>
				<router-link  to="/community">社区</router-link>
			</div>
		</div>
		<div class="content">
			<transition>
				<router-view></router-view>
			</transition>
			<!-- <router-view></router-view> -->
			<router-view name="view"></router-view>
		</div>
	</div>
</template>

<script>


export default {
    name: 'App',
    components: {
    
	},
	methods:{
		handleClick(){
			// 回退时会恢复上一个网页的状态
			this.$router.push('/home')
			// 回退时不会恢复上一个网页的状态
			// this.$router.replace('/home')
			// this.$router.go(-1)
		}
	}
}
</script>

<style>
:root,body{
	height: 100%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	
}
.nav-box{
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: rgba(0, 0, 200, .5);
}
.logo{
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	cursor: pointer;
}
.nav-list{
	display: flex;
	width: 60%;
	justify-content: space-between;
	align-items: center;
}
.nav-list a{
	text-decoration: none;
	color: #000;
	font-size: 18px;
}
/* 此处修改选中效果，不然当单击二级导航栏时，一级导航栏没有选中效果  */
.nav-list a.router-link-active{
	font-weight: bold;
	color: #fff;
}
.content{
	margin-top: 40px;
	font-size: 20px;
}
/* 过渡的动画 */
.v-enter{
	transform: translateX(1000px);
}
.v-enter-active{
	transition:  all .2s;
}
.v-enter-to{
	transform: translateX(0);
}
</style>

