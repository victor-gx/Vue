<template>
    <div>
        <school/>
        <hr>
        <Student/>
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
       
    }
</script>

<style>

</style>