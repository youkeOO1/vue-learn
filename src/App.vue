<template>
	<div id="app">
		<div class="nav-box">
			<div class="logo">zxt</div>
			<div class="nav-list">
				<router-link tag="div" to="/">首页</router-link>
				<router-link tag="div" to="/learn">课程学习</router-link>
				<router-link tag="div" to="/show">学员展示</router-link>
				<router-link tag="div" to="/about">关于</router-link>
				<router-link tag="div" to="/community">社区</router-link>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>


export default {
    name: 'App',
    components: {
    
	},
	created(){
		// console.log(this,'app.vue')
		console.log(this.$router,'$router')
	}
}
</script>

<style>
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
.nav-list a.router-link-exact-active{
	font-weight: bold;
	color: #fff;
}
.content{
	margin-top: 40px;
	font-size: 20px;
}
</style>
