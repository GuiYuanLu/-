import request from '../../utills/request.js'
import qs from 'qs'

//获取翻页
function getPageData(data,config){
	return new Promise((resolve,reject)=>{
		request.get('/common/Handler.ashx?action=getcategorylist',qs.stringify(data))
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}
//获取幻灯片
function getSwiperData(data,config){
	return new Promise((resolve,reject)=>{
		request.get('/common/Handler.ashx?action=apphome',qs.stringify(data))
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}
//获取产品
const proUrl = '/common/Handler.ashx'
function getProData(data,config){
	return new Promise((resolve,reject)=>{
		request.post(proUrl,qs.stringify(data))
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}
//获取分类
function getCatgoryData(data,config){
	return new Promise((resolve,reject)=>{
		request.get('/common/Handler.ashx?action=getcategorylist',qs.stringify(data))
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}


//获取详情页
function getProductData(url,data,config){
	return new Promise((resolve,reject)=>{
		request.get(url,qs.stringify(data))
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}


//获取分类
export {getPageData}
//获取轮播图
export {getSwiperData}

export {getProData}
//获取分类
export{getCatgoryData}

//获取产品页
export {getProductData}