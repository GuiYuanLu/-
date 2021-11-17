<template>
	<div class="home">
		<div class="header">
			<div class="left"><img src="../assets/category.png" width="30" @click="$router.push('/category')"></div>
			<input type="text" placeholder="请输入您要搜索的关键词">
			<div class="right"><img src="../assets/message.png" width="30" @click="showPopup()"></div>
		</div>
		<div class="subheader">
			<div class="up">
				<div class="up-wrap">
					<div v-for="(item,index) in tabs" :class="{'active':index==current}" @click="current=index"
						:key="item.ColId">{{item.ColTitle}}</div>
				</div>
				<div class="arrow" @click="showDown=!showDown">
					<div>
						<img src="../assets/zhedie.png" width="20">
					</div>
				</div>
			</div>
			<div class="down" v-if="showDown">
				<div class="title">
					全部
				</div>
				<div class="down-wrap">
					<div class="btn" v-for="(item,index) in tabs" :key="item.ColId" :class="{'active':index==current}"
						@click="current=index;showDown=false">{{item.ColTitle}}</div>
				</div>
			</div>
		</div>
		<div class="content" v-if="tabs.length">
			<pages :item="tabs[current]"></pages>
			<morepages :it="tabs[current!==0]"></morepages>
		</div>
		<div>
			<van-popup v-model="show" overlay v-show="shooww"
				style="width: 70%;height: 3rem;border-radius: .133333rem;padding: .64rem .266667rem;text-align: center;margin: 0 auto;background-color: hsla(0,0%,100%,.98);">
				<p style="padding-bottom: .5rem;">此功能需要访问客户端才能使用</p>
				<van-button color="linear-gradient(to right, #fe5e04,#fc231f)">
					<p style="color: #FFFFFF;">下载茶店app</p>
				</van-button>
				<van-button type="default" color="#bfbfbf" @click="shooww=false">
					<p>逛逛别的</p>
				</van-button>
			</van-popup>
		</div>

	</div>
</template>

<script>
	import pages from '../components/pages.vue'
	import morepages from '../components/morepages.vue'
	import {
		getPageData
	} from '../api/home/index.js'
	export default {
		components: {
			pages,
			morepages
		},
		data() {
			return {
				//顶部分类信息
				tabs: [],
				showDown: false,
				current: 0,
				show: false,
				shooww:true,
			}
		},

		created() {
			this.getTabs()
		},
		methods: {
			getTabs() {
				getPageData()
					.then(res => {
						this.tabs = res.data.data.list
					})
					.catch(err => {
						console.error(err)
					})
			},
			showPopup() {
				this.show = !this.show;
			},
		}
	}
</script>
<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	input::-webkit-input-placeholder {
		font-weight: 300;
		color: #f00;
		line-height: .426667rem;
		font-size: .25rem;
		height: .426667rem;
		color: #c8c9cc;
	}

	.home {
		display: flex;
		flex-direction: column;
	}

	/* 高亮分类颜色 */
	.active {
		color: #F30;
	}

	.header,
	.subheader {
		height: .88rem;
		background-color: #F0F0F0;
		position: relative;
		z-index: 300;
	}

	.home .content {
		flex: 1;
		overflow-y: auto;
		position: relative;
		z-index: 100;
	}

	.header {
		display: flex;
		align-items: center;
		background: linear-gradient(to right, rgb(255, 102, 0), rgb(251, 32, 32));

	}

	.header input {
		flex: 1;
		height: .58rem;
		padding: 0 .1rem;
		border-radius: 26.64rem;
		border: 0;
	}

	.header .left,
	.header .right {
		padding: 0 .3rem;
	}

	img {
		vertical-align: middle;
	}

	.up-wrap::-webkit-scrollbar {
		display: none;
	}

	.up {
		display: flex;
		position: relative;
		z-index: 400;
		line-height: .88rem;
		vertical-align: baseline
	}

	.up .up-wrap {
		flex: 1;
		white-space: nowrap;
		overflow-x: auto;
		display: flex;
		padding-right: 1.067rem;
		box-sizing: border-box;
	}

	.up .up-wrap div {
		padding-right: .3rem;
	}

	.up .arrow {
		width: .88rem;
		text-align: center;
		line-height: .88rem;
	}

	.down {
		position: absolute;
		z-index: 500;
		left: 0;
		top: .88rem;
		right: 0;
	}

	.down .title {
		margin-right: .88rem;
		line-height: .88rem;
		background-color: #F0F0F0;
		padding-left: .3rem;
		color: #484848;
		margin-top: -0.88rem;
	}

	.down-wrap {
		background-color: #F0F0F0;

	}

	.down-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.down-wrap .btn {
		width: 1.425rem;
		line-height: .6rem;
		margin-left: .3rem;
		margin-bottom: .3rem;
		background-color: #fff;
		text-align: center;
		border-radius: 6px;
	}
</style>
