// 实现 axios封装?
// 1. 封装后统一管理（baseURL请求的域名，请求头Content-Type）
// 2. 拦截请求与响应（添加加载提示，添加token，auth认证等请求头）
// 3. 扩展axios功能（axios自身不支持jsonp方法，可以扩展一个）

// 01导入 ajax 请求工具
import axios from 'axios';
// 导入jsonp 方法
import jsonp from 'jsonp'

// 对象序列化工具
import qs from 'qs'



// 02实例化axios
var request = axios.create({
	baseURL:"/",//基础请求域名，本地
	// timeout:3000,// 请求超时时间3s
	headers:{post:{"Content-Type":"application/x-www-form-urlencoded"},
	
	},
	// 设置post请求的编码
})

// 03 拦截
/**
 * 创建loading
 */
function createLoading(){
	var elem = document.getElementById("myloading");
	if(!elem){
		// 创建一个div
		var elem = document.createElement("div");
	}
	
	// 设置id
	elem.id = "myloading";
	// 设置innerHTML文本内容
	elem.innerHTML="开始加载...";
	// 插入到body中
	document.body.appendChild(elem);
}
/**
 * 移除loading
 */
function removeLoading(){
	var elem = document.getElementById("myloading");
	if(elem){
		// 移除子节点elem
		document.body.removeChild(elem);
	}
}
request.interceptors.request.use(
function(config){
	 //请求拦截的时候添加token头信息
	 //动态实现了每次请求都携带token
	 config.headers.Token = window.localStorage.getItem("token")
	createLoading();
	return config;
},
function(err){
	Promise.reject(err)
}
)
// 当服务器返回数据的时候拦截
request.interceptors.response.use(
function(res){
	removeLoading()
	return res;
},
function(err){
	 removeLoading()
	Promise.reject(err)
}
)

// 04 扩展 功能
/**
 * 扩展了jsonp方法
 * @param {String} url 请求的url
  * @param {Object} url 请求的配置(可选) 
 */
request.jsonp=function(url,config){
	return new Promise((resolve,reject)=>{
		//err错误信息
		// data请求的数据
		jsonp(url,config,(err,data)=>{
			if(err){reject(err)}
			else{
				resolve(data)
			}
		})
	})
}

//  05 导出
export default request;