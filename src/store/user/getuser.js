import request from "../../utills/request.js"
//把用户模块儿的全局信息用一个新的模块来封装
var user = {
	//命名空间   和 全局的转态的方法名字一样设置这个可以使用局部的而不使用全局的
	namespaced :true, 
	state:{
		userinfo:{
			name:"Ray",
			age:20,
		}
	},
	mutations:{
		//设置用户信息
		setUser(state,info){
			state.userinfo = info
		},
	},
	actions:{
		getUserInfo(context) {
			// 通过get方式获取
			request.get("/member/ajax_login.php")
				.then(res => {
					// 更新用户信息					
					context.commit("setUser",res.data)
				})
				.catch(err => {})
		},
	},
}
export default user