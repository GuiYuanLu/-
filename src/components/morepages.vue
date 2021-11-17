<template>
	<div class="second" >
		<div  v-for="af in after">
			{{af}}
		</div>
	</div>
</template>

<script>
	import {
		getProData
	} from '../api/home/index.js'
	export default{
		data(){
			return{
				//传数据携带的参数
				cid:200,
				//定义第一页以后的页面
				after:[],
			}
		},
		created() {
			this.getmoredata()
		},
		props:{
			it:{
				type:Object
			}
		},
		watch:{
			"item2":{
				handler(){
					this.getmoredata()
				},
				deep:true
			}
		},
		methods:{
			getmoredata(){
				getProData({
					action: "GetProducts",
					cid:this.cid,
					keyword: "",
					pageindex: this.pageindex,
					pagesize: 20,
					isrecommend: 0,
					ordersid: 1,
					orders: "asc"
				})
				.then(res=>{
				
					this.after = res.data.list
				})
			},
			
		}
	}
</script>

<style>
</style>
