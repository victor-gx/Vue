<template>
    <div class="app">
		<h1>{{msg}}</h1>
        <school/>
        <student/>
	</div>
</template>

<script>
    import Student from './components/Sutdent.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{
            Student, School
        },
        data() {
            return {
                msg:'你好啊！',
            }
        },
    }
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
