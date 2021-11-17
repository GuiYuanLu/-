<template>
	<div class="cart" >
		<van-nav-bar title="购物车" left-text="" left-arrow  @click-left="$router.back()" style="background: linear-gradient(90deg,#f60,#fb2020);">
			<van-icon name="search" size="20" slot="right"/>
		</van-nav-bar>
		<p >共<i>{{$store.getters.allnum}}</i>件宝贝</p>
		<div class="goods" v-for="good in goods" style="background-color: #FFFFFF;margin-top: .4rem;">
			<div class="clo-10">
				<van-checkbox v-model="good.select" checked-color="#f70"></van-checkbox>
			</div>
			<div>
				<img src="../assets/商店头像.png" width="20">
			</div>
			<div class="col-40">
				<img :src="picture+good.picurl" width="70%" >
			</div>
			<div class="col-40">
				<p>{{good.productname}}</p>
				<p>售价:{{good.memberprice}}</p>
				<van-stepper v-model="good.num" :max="good.buy_limit" :min="1" />
			</div>
			<div class="clo-10 del" @click="$store.commit('delcaritem',good)">
				<van-icon name="delete-o" />
			</div>
			
		</div>
		<p style="position: absolute;bottom: .5rem;right: .2rem;font-size: .5rem;">
			合计:<span style="color:#ee0a24 ;font-size: .5rem;">¥{{$store.getters.allPrice}}</span>
			<button style="background: linear-gradient(90deg,#f60,#fb2020);border-radius: .8rem .8rem;
			min-width: 1.8rem;width: auto; height: .5rem;margin-left: .27rem;padding: 0 .21rem;font-size: .3rem;">结算</button>
		</p>
	</div>
	
</template>

<script>
	//mapState把vuex中的状态映射为vue组件中data(computed里映射)
	//mapGetters把vuex中的getters映射为vue组件中的data
	// mapMutations把vuex中的mutation方法映射为vue组件中的方法(methods里映射)
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	import bus from '../utills/bus.js'
	export default {
		data() {
			return {
				checked: true,
				picture: 'https://chadian-img.oss-cn-shanghai.aliyuncs.com/',
			}
		},
		created() {
			console.log()
			bus.$emit("tabschange", false)
			
		},
		beforeDestroy() {
			bus.$emit("tabschange", true)
		},
		methods: {
			...mapMutations(['delcaritem'])
		},
		computed: {
			...mapState({
				'goods': state => state.goods,
				'userinfo': state => state.user.userinfo
			}),
			...mapGetters(['allnum'])
		}
	}
</script>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		color: #FFFFFF;
		background: linear-gradient(90deg, #f60, #fb2020);
		height: 150px;
	}

	.header h1 {
		margin-left: .2rem;
		margin-top: .2rem;
	}

	.goods {
		display: flex;
	}

	.col-10 {
		flex-basis: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.col-40 {
		flex-basis: 40%;
	}

	.good img {
		vertical-align: middle;
	}

	.cart .vab-nav-bar .van-icon {}

	.goods .del {
		display: flex;
		align-items: flex-end;
		padding-bottom: .2rem;
	}
</style>
