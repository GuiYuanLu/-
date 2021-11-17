<template>
	<div>
		<van-popup v-model="show"  v-show="shooww" overlay
			style="width: 70%;height: 3rem;border-radius: .133333rem;padding: .64rem .266667rem;text-align: center;margin: 0 auto;background-color: hsla(0,0%,100%,.98);">
			<p style="padding-bottom: .5rem;">此功能需要访问客户端才能使用</p>
			<van-button color="linear-gradient(to right, #fe5e04,#fc231f)">
				<p style="color: #FFFFFF;">下载茶店app</p>
			</van-button>
			<van-button type="default" color="#bfbfbf" @click="shooww = false">
				<p>逛逛别的</p>
			</van-button>
		</van-popup>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				show: false,
				shooww:true,
			}
		},
		methods:{
			showPopup() {
				this.show = !this.show;
			},
		},
		created() {
			this.showPopup()
		}
	}
</script>

<style>
</style>
