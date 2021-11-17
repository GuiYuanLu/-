<template>
	<div id="app">
		<router-view class="pages "  :class="{'has-tabs':showTabs}" />
		<div class="tabs" v-if="showTabs">
			<router-link to="/" class="col ihome">
				<span>首页</span>
			</router-link>
			<router-link to="/category" class="col icate">
				<span>分类</span>
			</router-link>
			<router-link to="/ball" class="col iball"> 
				<span>消息</span>
			</router-link> 
			<router-link to="/cart"  class="col icart">
				<i>{{$store.getters.allnum}}</i>
				<span>购物车</span>
			</router-link>
			<router-link to="/user" class="col iuser">
				<span>我的</span>
			</router-link>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				showTabs:true
			}
		},
		created() {
			// this.$store.dispatch('getcart')
		},
		
	}
</script>

<style>
	a{
		color: #777;
	}
	.icart i{
		position: absolute;
		height: .3rem;
		line-height: .3rem;
		width: .3rem;
		border-radius: .2rem;
		background-color: red;
		color: #fff;
		font-size:.2rem ;
	}
	#app{
		width: 7.2rem;
		height: 100vh;
		position: relative;
	}
	.tabs{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: .98rem;
		display: flex;
		background-color: #f0f0f0;
		text-align: center;
		font-size: 0.18rem;
	}
	.pages{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
	.has-tabs{
		bottom: 0.98rem;
	}
	.tabs span:before{
		content: "";
		display: block;
		width: .45rem;
		height: .45rem;
		margin: 0.04rem auto;
		margin-top: 0.08rem;
		background: url(assets/home.png) no-repeat center;
		background-size: 100% auto;
	}
	.tabs .icate span:before{
		background-image: url(./assets/category.png);
	}
	.tabs .iball span:before{
		background-image: url(./assets/message.png);
	}
	.tabs .icart span:before{
		background-image: url(./assets/cart.png);
	}
	.tabs .iuser span:before{
		background-image: url(./assets/user.png);
	}
	/* 设置高亮 */
	.tabs .ihome.router-link-exact-active span:before{
		background-image: url(assets/home-h.png);
	}
	.tabs .iuser.router-link-exact-active span:before{
		background-image: url(assets/user-h.png);
	}
	.tabs .icate.router-link-exact-active span:before{
		background-image: url(./assets/category-h.png);
	}
	.tabs .iball.router-link-exact-active span:before{
		background-image: url(./assets/message-h.png);
	}
	.tabs .icart.router-link-exact-active span:before{
		background-image: url(./assets/cart-h.png);
	}
	
	.tabs .router-link-exact-active{
		color: #f30;
	}
	.col{
		flex: 1;
	}
	#myloading{
		 
		    position: absolute;
		    top: 0;
		    left: 0;
		    color: #fff;
		    height: 80px;
		    background-color: rgba(0,0,0,.3);
		    border-radius: 8px;
		    right: 0;
		    bottom: 0;
		    z-index: 1000;
		    margin: auto;
		    width: 120px;
		    line-height: 80px;
		    text-align: center;
	}
</style>
