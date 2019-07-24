<template>
    <div id="index">
           <p class="index-p"><a-avatar :size="150" :src="url"/></p>
        <a-input-search class="index-input" placeholder="请输入你的姓名" @search="goHome" v-model="userName" enterButton="立即进入" size="large" />
    </div>
</template>

<script>
    import pic from '../assets/avatar.jpeg'
    export default {
        name: "index",
        data(){
            return {
                userName:'',
                url:pic
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
        margin-top:0;
        width: 50%;

    }
    #index{
        text-align: center;
    }
    .index-p{
        margin-top:10% ;
    }


</style>