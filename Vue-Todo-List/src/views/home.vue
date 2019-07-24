<template>
    <div id="home">


        <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    v-model="collapsed"
            >
                <div class="logo" />
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1" @click="goList">
                        <a-icon type="user" />
                        <span>ToDo-List</span>
                    </a-menu-item>
                    <a-menu-item key="2" @click="goProfile">
                        <a-icon type="video-camera" />
                        <span>My Profile</span>
                    </a-menu-item>

                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">

                    <a-avatar class="home-div-user-line" :size="30" :src="url"/>
                    <label class="home-div-user-name">Hi,{{userName}}</label>
                    <a-icon
                            class="trigger"
                             type="logout"
                            @click="goMain"
                    />
                </a-layout-header>
                <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>

</template>

<script>
    import pic from '../assets/avatar.jpeg'
    export default {
        name: "home",
        data(){
          return {
              userName:'',
              url:pic
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
    .home-div-user-line{
        margin-left:85%;
        margin-right: 10px;
        font-size: 20px;
        line-height: 64px;
    }
    .home-div-user-name{
        font-family: "YouYuan";
        width : 80px;
        letter-spacing: 1px;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        margin-left: 20px;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
    }
</style>