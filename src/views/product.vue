<template>
	<div class="product">
		<div class="header">
			<div class="btn">
				<van-icon name="arrow-left" @click="$router.back()" />
			</div>
			<div class="btn" style="position: relative;left: 2.2rem;">
				<van-icon name="cart-o" @click="$router.push('/cart')" />
			</div>
			<div class="btn">
				<van-icon name="ellipsis" @click="showPopup()" />
			</div>

		</div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
			<van-swipe-item v-for="(item,index) in swipe" :key="index">
				<img :src="picture +item.img_url" width="100%">
			</van-swipe-item>
			<template #indicator>
				<div class="custom-indicator">{{ gcurrent + 1 }} / {{swipe.length}}</div>
			</template>
		</van-swipe>

		<van-popup v-model="show" v-show="show" style="background-color: rgba(53,53,53,.96);" :overlay="false"
			position="top" :style="{ height: '30%' }">
			<div>
				<p>功能直达</p>
				<van-icon name="cross" @click="showPopup()" />
			</div>
			<div class="xxx">
				<div>
					<img src="../assets/message.png">
					<p>消息</p>
				</div>
				<div>
					<img src="../assets/home.png">
					<p>首页</p>
				</div>
				<div>
					<img src="../assets/user.png">
					<p>我的</p>
				</div>
				<div>
					<img src="../assets/cart.png">
					<p>购物车</p>
				</div>
			</div>
		</van-popup>
		<div class="content" >
			<div style="background-color: #FFFFFF;" v-if="info">
				<p style="color: #e60b0b;font-size: .40rem;height: .64rem;line-height: .64rem;margin-left: .2rem;"><span
						style="font-size: .32rem;">¥</span>{{product_info.price}}
				</p>
				<span style="color: #747474;margin-left: .2rem;">价格:</span>
				<span
					style="text-decoration: line-through;color: #747474;margin-left: .2rem;">¥{{info.marketprice}}</span>
				<p
					style="color: #353535;font-size: .35rem;word-break: break-all;line-height: .53rem;min-height: .53rem;margin-left: .2rem;margin-top: .2rem;margin-bottom: .2rem;">
					{{info.productname}}
				</p>
			</div>

			<div v-if="info"
				style="color: #747474;display: flex;justify-content: space-between;margin-bottom: .2rem;background-color: #FFFFFF;">
				<span style="margin-left:.2rem;">快递:{{(product_info.shippingfee).toFixed(2)}}</span>
				<span style="font-size: .32rem;line-height: .48rem;">月销{{info.buycount}}</span>
				<span>{{product_info.region}}</span>
			</div>

			<div style="background-color: #FFFFFF;">
				<span>服务:</span>
				<span>破损包退 360保障 正品保证 7天无理由包退</span>
				<p>
					<span style="padding-right: .2rem;">参数</span>
					<span style="padding-right: .2rem;">生产日期</span>
					<span style="padding-right: .2rem;">生产工艺</span>
					<span>....</span>
					<van-icon name="arrow" @click="showPopup2()" style="float: right;font-size: .4rem;" />
				</p>


			</div>
		</div>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" :badge="$store.getters.allnum"   @click="$router.push('/cart')"/>
			<van-goods-action-icon icon="shop-o" text="店铺"  />
			<van-goods-action-button type="warning" text="加入购物车"  @click="$router.push('/cart');$store.commit('addcar',info)"  />
			<van-goods-action-button type="danger" text="立即购买" />
			<!-- $store.commit('addcar',view.goods_info[current] -->
		</van-goods-action>


	</div>
</template>

<script>
	import {
		getProductData,
	} from '../api/home/index.js'
	import {getcart} from '../api/cart/getcart.js'
	export default {
		data() {
			return {
				//定义所有
				pro:{},
				//定义产品信息
				product_info: {},
				//定义轮播图
				swipe: [],
				//定义产品id
				userid: null,
				//定义轮播图前隐藏的url部分
				picture: 'https://chadian-img.oss-cn-shanghai.aliyuncs.com/',
				//当前选中的商品
				current: 0,
				gcurrent: 0,
				//控制弹出层
				show: false,
				//控制第二个弹出层
				show2: false,
				//商品信息
				info: null,
				//shop
				shop:[]


			}
		},
		created() {
			this.$parent.showTabs = false
			this.getpro(),
			this.getpro2()
		},
		beforeDestroy() {
			this.$parent.showTabs = true
		},
		methods: {
			getpro() {
				getProductData('/common/Handler.ashx?action=GetProduct&id='+this.$route.params.id+'&userid=287185&user_rank=1')
					.then(res => {
						this.swipe = res.data.data.data.piclist
						this.product_info = res.data.data.data
						this.info = res.data.data.info
						this.pro = res.data.data
					})
					.catch(err => {
						console.error(err)
					})
			},
			getpro2(){
				getcart()
				.then(res=>{
					this.shop = res.data.data.shops
					// console.log(this.shop);
				})
			},
			onChange(index) {
				this.gcurrent = index;
			},
			showPopup() {
				this.show = !this.show;
			},
			showPopup2() {
				this.show2 = !this.show2;
			},
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}

	.custom-indicator {
		position: absolute;
		right: .3rem;
		bottom: .3rem;
		background-color: rgba(0, 0, 0, .5);
		color: #fff;
		border-radius: .5rem;
		font-size: .3rem;
		text-align: center;
		padding: .1rem .15rem;
		font-size: .22rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		height: .88rem;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		z-index: 1100;
	}

	.header .btn {
		margin: 0 .3rem;
		background-color: rgba(0, 0, 0, .3);
		height: .58rem;
		width: .58rem;
		border-radius: .58rem;
		color: #fff;
		font-size: .28rem;
		line-height: .58rem;
		text-align: center;
	}

	.my-swipe {
		position: relative;
		z-index: 1000;
	}

	.xxx p {
		color: white;
	}
</style>
