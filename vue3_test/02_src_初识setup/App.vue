<template>
	<h1>我是App组件</h1>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>性别：{{sex}}</h2>
	<h2>a的值是：{{a}}</h2>
	<button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
	<br>
	<br>
	<button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
	<br>
	<br>
	<button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
	<br>
	<br>
	<button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>

</template>

<script>
  // import {h} from 'vue'
  export default {
    name: 'App',

    data() {
      return {
        sex:'男',
        a:100
      }
    },
    methods: {
			sayWelcome(){
				alert('欢迎学习Vue')
			},
			test1(){
				console.log(this.sex)
				console.log(this.name)
				console.log(this.age)
				console.log(this.sayHello)
			}
		},
    
    setup(){
      //数据
			let name = '张三'
			let age = 18
      let a = 200

      function sayHello() {
        alert(`我叫${name}，我${age}岁了，你好啊！`)
      }
      function test2(){
				console.log(name)
				console.log(age)
				console.log(sayHello)
				console.log(this.sex)
				console.log(this.sayWelcome)
			}

      //返回一个对象（常用）
			return {
				name,
				age,
				sayHello,
        test2,
        a
			}

      //返回一个函数（渲染函数）
			// return ()=> h('h1','gx')
    }
  }
</script>

