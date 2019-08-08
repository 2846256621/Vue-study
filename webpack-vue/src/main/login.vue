<template>
    <div>
        <h2>这是.vue文件定义处理的组件 --- {{message}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:"这是组件内部的数据"
        }
    },
    methods:{
        show(){
            console.log("调用了login.vue中的show 方法")
        }
    }
}
</script>

<style>
h2{
    color: #ff332f;
}
</style>