<template>
    <div id="home">
        <span class="home-div-un">{{userName}}</span>
        <button @click="goMain" class="home-div-button">返回</button>
        <dl class="home-div-dl">
            <p class=" home-div-dl-bar"> ↓这是导航栏</p>
            <dt > <button @click="goList" class="home-div-dt-button">Todo-List</button></dt>
            <dt><button @click="goProfile" class="home-div-dt-button">My Profile</button></dt>
        </dl>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
          return {
              userName:''
          }
        },
        mounted(){
            this.userName = this.$route.params.userName
            console.log(this.userName)
        },
        methods:{

            goList(){
                this.$router.push('todos')
            },
            goProfile(){
                this.$router.push({path: `/home/${this.userName}/profile`})
            },
            goMain(){
                let ev=confirm("确定要返回吗")
                if(ev) {
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style scoped>

</style>