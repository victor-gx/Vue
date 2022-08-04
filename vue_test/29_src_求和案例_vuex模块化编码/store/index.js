//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
	modules:{
		countAbout:countOptions,
		personAbout:personOptions
	}
})

// //准备actions——用于响应组件中的动作
// const actions = {
//     jiaOdd(context,value){
// 		console.log('actions中的jiaOdd被调用了')
// 		if(context.state.sum % 2){
// 			context.commit('JIA',value)
// 		}
// 	},
// 	jiaWait(context,value){
// 		console.log('actions中的jiaWait被调用了')
// 		setTimeout(()=>{
// 			context.commit('JIA',value)
// 		},500)
// 	}
// }

// //准备mutations——用于操作数据（state）
// const mutations = {
//     JIA(state,value){
// 		console.log('mutations中的JIA被调用了')
// 		state.sum += value
// 	},
//     JIAN(state,value){
// 		console.log('mutations中的JIAN被调用了')
// 		state.sum -= value
// 	},
// 	ADD_PERSON(state,value){
// 		console.log('mutations中的ADD_PERSON被调用了')
// 		state.personList.unshift(value)
// 	}
// }

// //准备state——用于存储数据
// const state = {
//     sum:0, //当前的和
// 	school:'尚硅谷',
// 	subject:'前端',
// 	personList:[
// 		{id:'001',name:'张三'}
// 	]
// }

// //准备getters——用于将state中的数据进行加工
// const getters = {
// 	bigSum(state){
// 		return state.sum*10
// 	}
// }

// //创建并暴露store
// export default new Vuex.Store({
//     actions,
//     mutations,
//     state,
// 	getters
// })

