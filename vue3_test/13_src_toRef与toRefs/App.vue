<template>
  	<Demo/>
</template>

<script>
	import {ref} from 'vue'
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup() {
			let isShowDemo = ref(true)
			return {isShowDemo}
		}
	}
</script>

