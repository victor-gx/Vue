<template>
    <div>
        <Student name="李四" sex="女" :age="18"/>
    </div>
</template>

<script>
    import Student from './components/Sutdent.vue'

    export default {
        name:'App',
        components:{
            Student
        },
       
    }
</script>

<style>

</style>