<template>
	<div class="category" v-if="category[0]">
		<div class="mheader">
			<van-icon name="arrow-left" class="arrow" size="30" @click="$router.back()" />
			<p>商品分类</p>
			<span></span>
		</div>
		<div class="content">
			<div class="left">
				<div class="item" v-for="(item,index) in category" :key="item.ColId" @click="ind=index">
					{{item.ColTitle}}
				</div>
			</div>

			<div class="right" style="width: 75%;">

				<van-swipe class="my-swipe" :autoplay="300000000" indicator-color="white">
					<van-swipe-item v-for="(cat,index) in category[ind].ad_list" @click="$router.push(`/product/`+cat.id)">
						<img :src="picture + cat.m_adimg">
					</van-swipe-item>
				</van-swipe>



				<div class="xxx" >
					<van-grid :column-num="3" :border="false" icon-size="1.2rem">
						<van-grid-item v-for="(cat,index) in category[ind].list[0].list" :key="index"
							:icon="picture + cat.PictureSmall" :text="cat.ColTitle"  :square="true" />
					</van-grid>
				</div>

				<div style="height: .5rem;line-height: .5rem;margin: 0 auto;">
					<p>热门品牌</p>
				</div>

				<div class="yyy">
					<van-grid :column-num="2" style="margin-top: .5rem;" :border="false" icon-size="1.2rem">
						<van-grid-item v-for="(i,index) in category[ind].list[0].BrandList" :key="index"
							:icon="picture + i.LogoPic" :square="true"   />
					</van-grid>
				</div>



				<!-- <div class="middle" >
					<div v-for="(cat,index) in category[ind].list[0].list"  >
						<img :src="picture + cat.PictureSmall"   >
						<p>{{cat.ColTitle}}</p>
					</div>
				</div>
				<div class="bottom" v-for="(i,index) in category[ind].list[0].BrandList" style="position: relative;z-index: 999;">
					
					<div style="width: 100%;height: 100%;display: inline-block;position: absolute;">
						<img :src="picture + i.LogoPic"  style="width:92.52px ;height:46.36px;">
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getCatgoryData
	} from '../api/home/index.js'
	export default {
		data() {
			return {
				//分类
				//右侧内容数据
				category: [],
				//定义轮播图前隐藏的url部分
				picture: 'https://chadian-img.oss-cn-shanghai.aliyuncs.com/',
				ind: 0,
			}
		},
		created() {
			this.getCategory()

		},
		methods: {
			getCategory() {
				getCatgoryData()
					.then(res => {
						this.category = res.data.data.list
						// console.log(this.category)
					})
					.catch(err => {
						console.error(err)
					})
			},
			// getcat(){
				
			// 	let newId = this.$route.query.id
			// 	this.$http.get('/common/Handler.ashx',{
			// 		params:{
			// 			action:GetProduct,
			// 			id:newId,
			// 			userid:287185,
			// 			user_rank:1
			// 		}
			// 	})
			// },
		},
	}
</script>

<style scoped="scoped">
	.category .mheader {
		height: .88rem;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: .88rem;
	}

	.category .content {
		display: flex;
		/* 左右的父元素超出部分隐藏 */
	}

	.content .left {
		width: 25%;
		min-width: 25%;
		flex-basis: 25%;
		background-color: #ffffff;
		overflow-y: auto;
		/* 超出部分 自动 */
	}

	.left .item {
		line-height: .86rem;
		border-bottom: #F0F0F0;
		text-align: center;
		font-size: .24rem;
		color: #484848;
	}

	.left .item:hover {
		background-color: #f4f4f4;
	}

	.arrow {
		padding-left: .2rem;
	}

	.mheader p {
		float: left;
		top: .1rem;
		left: .4rem;
	}

	.right .my-swipe {
		width: 100%;
	}

	.right .my-swipe img {
		width: 5.5rem;
		height: 2.5rem;
	}

	.right .xxx .van-icon__image{
		width: .91rem;
		height: .91rem;
	}
</style>
