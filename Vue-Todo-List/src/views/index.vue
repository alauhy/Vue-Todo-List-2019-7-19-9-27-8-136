<template>
    <div id="index">
        <input type="text" placeholder="请输入姓名" v-model.trim="userName">
        <button @click="goHome">开始使用</button>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                userName:''
            }
        },
        methods:{
            goHome(){
               if(this.userName !== '') {
                   this.$router.push({path: `/home/${this.userName}`})
               }
               else {
                   alert("请输入你的名字")
               }
            }
        }
    }
</script>

<style scoped>

</style>