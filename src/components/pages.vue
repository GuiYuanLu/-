<template>	
	<div class="tab-content">
		<div>
			<!--轮播图区域-->
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(section,index) in sections">
					<img :src="picture + section.adimg" style="width: 100%;height: 100%;" />
				</van-swipe-item>
			</van-swipe>
			<!--轮播图下方区域-->
			<div class="dow-swp" style="width: 100%;overflow-x: scroll;">
				<div style="width: 160%;display: flex; flex-wrap: wrap;overflow-x: auto; width: 160%; justify-content: space-around;">
					<div v-for="content in contents" class="pic" width="12.5%">
						<img :src="picture + content.picurl" width="46">
						<div style="color: #353535;">{{content.title}}</div>
					</div>
				</div>
			</div>

			<div class="swp-down">
				<div v-for="list in lists">
					<p style="color: red;">{{list.title}}</p>
					<p style="color: skyblue;font-size: 12px;">{{list.list[0].subtitle}}</p>
						
					<img :src="picture + list.list[0].picurl" style="width: 84px;height: 84px;">
					
				</div>
				<div v-for="list in lists">
					<p style="color: red;">{{list.title}}</p>
					<p style="color: skyblue;font-size: 12px;">{{list.list[1].subtitle}}</p>
					<img :src="picture + list.list[1].picurl" style="width: 84px;height: 84px;">
					
				</div>
			</div>
			<div>
				<p style="display: flex;">{{all.noticetitle}} 
					<b>:</b>
					<van-swipe style="height: .4rem;width: 60%;" class="my-swipe" :autoplay="3000" indicator-color="white" vertical>
						<van-swipe-item style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" v-for="xxx in head.list">{{xxx.title}}</van-swipe-item>
					</van-swipe>
				</p>	
			</div>
			<div><img src="../assets/安溪铁观音.jpg" alt="" style="width: 100%;"></div>
			<div class="joker" >
				<div>
					<div>全部</div>
					<div>猜你喜欢</div>
				</div>
				<div>
					<div>视频</div>
					<div>产品更直观</div>
				</div>
				<div>
					<div>便宜好货</div>
					<div>低价抢购</div>
				</div>
			</div>
			<!--下拉会刷新的产品-->
			<div class="aa" style="display: flex;flex-wrap: wrap;">
				<div v-for="arr in array" class="pro" style="width: 50%;" @click="$router.push('/product/'+arr.id)" >
					<img :src="picture + arr.picurl" >
					<span style="color: red;" class="price">¥{{arr.memberprice}}</span>
					<span style="font-size: 5px;"> &nbsp;&nbsp; {{arr.buycount}}人付款</span>
				</div>
			</div>
		</div>
		
		
	</div>

	
</template>

<script>
	import {
		getSwiperData
	} from '../api/home/index.js'
	import {
		getProData
	} from '../api/home/index.js'
	export default {
		data() {
			return {
				//定义所有,
				all: [],
				//顶部分类
				sections: [],
				//轮播图
				contents: [],
				//轮播图下方数据
				lists: [],
				//定义滚动头条
				head: {},
				//定义轮播图前隐藏的url部分
				picture: 'https://chadian-img.oss-cn-shanghai.aliyuncs.com/',
				//倒计时
				time: 30 * 60 * 60 * 1000,
				//首页产品
				array: [],
				pageindex:1,
				flag:true,
			}
		},
		props: {
			item: {
				type: Object
			},
			
		},
		watch:{
			"item":{
				handler(){
					this.getSections()
				},
				deep:true
			}
		},
		mounted(){
			var content = document.querySelector(".content");
			content.onscroll = ()=>{
				var elem =document.querySelector(".aa .pro:last-of-type");
				var top =elem.getBoundingClientRect().top;
				if(top<window.innerHeight){
					this.getProductData()
				}
			}
		},
		created() {
			this.getSections()
			this.getProductData()
		},
		methods: {
			getSections() {
				getSwiperData()
					.then(res => {
						this.all = res.data.data
						this.sections = res.data.data.ban_list
						this.contents = res.data.data.homemenu
						this.lists = res.data.data.homezt
						this.head = res.data.data.noticelist
					})
					.catch(err => {
						console.error(err)
					})
			},
			getProductData() {
				this.flag = false
				getProData({
						action: "GetHomeProducts",
						pagesize: 20,
						pageindex: this.pageindex,
						type: 1,
					})
					.then(res => {
						this.array = this.array.concat(res.data.data.list)
						this.pageindex++
						this.flag = true
					})
					.catch(err => {
						console.error(err)
					})
			},
			


		}


	}
</script>

<style>
	.dow-swp::-webkit-scrollbar{
		color: red;
	}
	body {
		background-color: #f4f4f4;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.dow-swp {
		background-color: #fff;
		margin-top: .2rem;
	}

	.pro img {
		width: 3rem;
		height: 3rem;
		border-radius: .3rem;
	}

	.pro .price {
		margin-left: .2rem;
	}

	.swp-down{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		
	}

	.pic {
		width: 12.5%;
	}
	.joker{
		display: flex;
		
	}
	
</style>
