<template>
	<div id="app">
		<div class="nav-box">
			<div class="logo">zxt</div>
			<div class="nav-list">
				<router-link  to="/">首页</router-link>
				<router-link  to="/learn">课程学习</router-link>
				<router-link  to="/show">学员展示</router-link>
				<router-link  to="/about">关于</router-link>
				<router-link  to="/community">社区</router-link>
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
