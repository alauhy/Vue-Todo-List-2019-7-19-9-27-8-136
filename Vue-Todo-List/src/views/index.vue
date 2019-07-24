<template>
    <div id="index">
        <a-input-search class="index-input" placeholder="请输入你的姓名" @search="goHome" v-model="userName" enterButton="立即进入" size="large" />
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
    .index-input{
        margin-top: 10%;
        width: 50%;

    }
    #index{
        text-align: center;
    }

</style>