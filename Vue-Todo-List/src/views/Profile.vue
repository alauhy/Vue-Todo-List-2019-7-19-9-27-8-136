<template>
    <div id="profile">
        <p class="pf-div-p">username:{{userName}}</p>
        <p class="pf-div-p">phoneNumber:{{phoneNumber}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
            return{
                userName:this.$route.params.userName,
                phoneNumber:12345678910
            }
        }
    }
</script>

<style scoped>
    #profile{
        text-align: center;
    }
    .pf-div-p{
        font-family: "Microsoft New Tai Lue";
        font-size: 30px;
    }

</style>