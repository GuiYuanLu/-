import Vue from 'vue'
import Vuex from 'vuex'
import {
	getcart
} from '../api/cart/getcart.js'
import user from './user/getuser.js'
Vue.use(Vuex)
export default new Vuex.Store({
	//存放数据和状态
	state: {
		goods: [

		]
	},
	//操作和修改数据和状态
	mutations: {
		delcaritem(state, item) {
			var ind = state.goods.findIndex(value => item === value)
			var flag = window.confirm("您确定要删除吗?")
			if (flag) {
				state.goods.splice(ind, 1)
			}

		},
		addcar(state, item) {
			//对原来的数据解构 再添加
			var good = {
				...item
			}
			good.num = 1
			good.select = true
			//如果已经由商品就num+1 如果没有商品就unshift
			var can = state.goods.some((value, ind) => {
				if (value.name === good.name) {
					value.num += good.num
					return true
				} else {
					return false
				}
			})

			state.goods.unshift(good)


		},
		initCart(state, goods) {
			state.goods = goods
		},
	},
	//从现有数据计算出新数据
	getters: {
		allnum(state) {
			var n = 0
			state.goods.forEach(item => {
				if (item.select) {
					n += item.num
				}
			})
			return n
		},
		allPrice(state) {
			var n = 0;
			state.goods.forEach(item => {
				// 如果是选中的
				if (item.select) {
					// 累加
					n += item.num * item.memberprice;
				}
			})
			return n;
		}
	},
	actions: {
		getcart(context) {
			getcart()
				.then(res => {
					context.commit("initCart", res.data)
				})
		},

	},
	modules: {
		user,
	}
})
