module.exports = {
	// 配置本地服务器
	devServer:{
		// 代理
		proxy:{
			// "/member" 请求的标识符，当http请求遇到/member 开始代理
			"/member":{
				// 把请求的域名替换为target对应域名，服务器端去请求数据
				target:"http://www.520mg.com",
				// 允许跨域
				changeOrigin:true
			},
			"/v1":{
				// 把请求的域名替换为target对应域名，服务器端去请求数据
				target:"https://m.mi.com",
				// 允许跨域
				changeOrigin:true,
				onProxyReq(proxyReq, req, res) {
					//额外添加请求头
					 proxyReq.setHeader('Referer', 'https://m.mi.com/'); 
				 }
			},
			//茶店网
			"/common":{
				target:"https://api.chadian.com",
				changeOrigin:true,
				onProxyReq(proxyReq, req, res) {
					//额外添加请求头
					 proxyReq.setHeader('Referer', 'https://api.chadian.com/'); 
				 }
			}
		}
	}
}
// vue.config.js 如果发生新建，修改，需要重启服务器