<template>
    <div class = "school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
	import pubsub from 'pubsub-js'
    export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'yus',
				address:'qhd',
			}
		},
		methods: {
			demo(magName, data) {
				console.log('hello收到消息', magName, data)
			}
		},
		mounted() {
			// console.log('School',this)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */
			this.pubId = pubsub.subscribe('hello', this.demo)
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
	}
</style>