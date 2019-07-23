<template>
  <div id="index">
    <input type="text" value="请输入姓名">
    <button @click="toHome">开始使用</button>

  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      toHome:()=>{
       this.$router.push({name:"Home"})
      }
    }
  }
</script>

<style scoped>

</style>
