import request from '../../utills/request.js'

//获取购物车初始化信息的方法
function getcart(){
	return new Promise((resolve,reject)=>{
		request.get("/common/Handler.ashx?action=getcartlist&userid=287185&user_rank=1")
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}

export {getcart}