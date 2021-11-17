<template>
	<div>
		<div class="header" >
			<div style="position: relative;" >
				<img :src="picture + info.user_model.Head_Url" style="border: 1px solid;
					margin: .2rem .3rem;
					border-radius: 50%;vertical-align: top;width: 54px;height: 54px;">
				<span style="color: #FFFFFF;
					font-size: .32rem;font-weight: 300;
					line-height: .6rem;margin-bottom: .10rem;
					white-space: nowrap;
					text-overflow: ellipsis;overflow: hidden;
					">{{info.user_model.nickname}}</span>
				<p style="color: rgb(255, 255, 255);border-radius: 26.64rem;
					font-size: .32rem;line-height: .42rem;text-align: center;
					border: 1px solid #FFFFFF;width: 1.8rem;height: .5rem;
					position: absolute;top: .5rem;left: 1.5rem;
					">个人会员</p>


				<div style="display: flex;justify-content: space-between;
				color: #FFFFFF;
				">
					<div class="item" style="margin-left: .4rem;">
						<div class="count">0</div>
						<div class="label">收藏夹</div>
					</div>
					<div class="item">
						<div class="count">0</div>
						<div class="label">关注店铺</div>
					</div>
					<div class="item">
						<div class="count">0</div>
						<div class="label">足迹</div>
					</div>
					<div class="item">
						<div class="count">0</div>
						<div class="label">积分</div>
					</div>
				</div>
			</div>
		</div>

		<div class="header_bottom" style="position: relative;z-index: 2;
		background-color: #FFFFFF;display: flex;justify-content: space-around;margin-left: .2rem;margin-right: .2rem;border-radius: .2rem .2rem;margin-top: .2rem;">
			<div style="display: flex;" class="first">
				<div style="width: .9rem;height: .9rem;"><img src="../assets/first.png"
						style="width: 100%;height: 100%;"></div>
				<div>
					<div>玩赚积分</div>
					<div style="color: #e60b0b;">积分商城兑换</div>
				</div>
			</div>
			<div style="display: flex;">
				<div style="width: .9rem;height: .9rem;"><img style="width: 100%;height: 100%;" src="../assets/two.png">
				</div>
				<div>
					<div>每日红包</div>
					<div style="color: #e60b0b;">立即领取现金</div>
				</div>
			</div>
		</div>


		<div style="background-color: #FFFFFF;margin-top: .3rem;margin-left: .2rem;margin-right: .2rem;border-radius: .2rem .2rem;">
			<div style="display: flex;justify-content: space-between;">
				<div>我的订单</div>
				<div>
					<span style="color: #969799;">查看全部订单</span>
					<van-icon name="arrow" />
				</div>
			</div>
			<div style="display: flex;margin-top: .5rem;justify-content: space-between;">
				<div style="width: 100%;height: 100%;margin-left: .2rem;">
					<img style="width: 27px;height: 27px;" src="../assets/待付款.png" alt="">
					<div style="vertical-align: bottom;">待付款</div>
				</div>
				<div style="width: 100%;height: 100%;">
					<img style="width: 27px;height: 27px;" src="../assets/待发货.png" alt="">
					<div>待发货</div>
				</div>
				<div style="width: 100%;height: 100%;">
					<img style="width: 27px;height: 27px;" src="../assets/待收货.png" alt="">
					<div>待收货</div>
				</div>
				<div style="width: 100%;height: 100%;">
					<img style="width: 27px;height: 27px;" src="../assets/待评价.png" alt="">
					<div>待评价</div>
				</div>
				<div style="width: 100%;height: 100%;">
					<img style="width: 27px;height: 27px;" src="../assets/售后png.png" alt="">
					<div>退款/售后</div>
				</div>
			</div>
		</div>

		<div class="Toolbox"
			style="background-color: #FFFFFF;margin-top: .4rem;margin-right: .2rem;margin-left: .2rem;border-radius: .2rem .2rem;">
			<div style="margin-bottom: .4rem;">
				我的工具箱
			</div>
			<div style="display: flex;flex-wrap: wrap;text-align: center;">
				<div style="width: 25%;margin-bottom: .4rem;">
					<div><img style="width: 28px;height: 28px;" src="../assets/收藏.png" alt=""></div>
					<div style="font-size: 13.6px;">我的收藏</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/收货地址.png" alt=""></div>
					<div style="font-size: 13.6px;">收货地址</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/我的评价.png" alt=""></div>
					<div style="font-size: 13.6px;">我的评价</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/个人资料.png" alt=""></div>
					<div style="font-size: 13.6px;">个人资料</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/账号安全.png" alt=""></div>
					<div style="font-size: 13.6px;">账号安全</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/优惠券png.png" alt=""></div>
					<div style="font-size: 13.6px;">优惠券</div>
				</div>
				<div style="width: 25%;">
					<div><img style="width: 28px;height: 28px;" src="../assets/红包记录.png" alt=""></div>
					<div style="font-size: 13.6px;">红包记录</div>
				</div>
			</div>

		</div>

		<div v-for="(item,index) in info2.homezt" style="margin-top: .3rem;background-color: #FFFFFF;margin-right: .2rem;margin-left: .2rem;">
			<div style="position: relative;border-radius: .2rem .2rem;">
				<div style="display: flex;">
					<img :src="item.picurl" width="20" height="20">
					<span>{{item.title}}</span>
					<span style="color: #FFFFFF;background-color: #ee0a24;font-size: .2rem;
					line-height: .42rem;height: .42rem;">推荐</span>
					<div style="margin-left: 2.4rem;">
						<p style="color: #969799;display: inline-block;">{{item.title1}}</p>
						<van-icon name="arrow" color="#969799" />
					</div>

				</div>
				<div style="display: flex;flex-direction: row;">
					<div v-for="(i,index) in item.list" style="">
						<img :src="picture+i.picurl" width="80" height="80" style="margin: 0 .158rem;">
						<p style="color:  chocolate;">{{i.subtitle}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getProData
	} from '../api/home/index.js'
	export default {
		data() {
			return {
				//获取用户信息
				info: {},
				//定义用户信息下方
				info2: {},
				//定义隐藏的请求头
				picture: 'https://chadian-img.oss-cn-shanghai.aliyuncs.com/',

			}
		},
		created() {
			this.getuser()
			this.getuser2()
		},
		methods: {
			getuser() {
				getProData({
						action: "getuserinfo",
						userid: "287185"
					})
					.then(res => {

						this.info = res.data.data
						// console.log(this.info);
					})
					.catch(err => {
						console.error(err)
					})
			},
			getuser2() {
				getProData({
						action: "GetACData",
					})
					.then(res => {

						this.info2 = res.data.data
						// console.log(this.info2);
					})
					.catch(err => {
						console.error(err)
					})
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		background: linear-gradient(90deg, #f60, #fb2020);
		padding-top: .3rem;
	}

	.item {
		width: 2rem;
	}
</style>
