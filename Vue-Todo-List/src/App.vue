<template>
  <div id="app">
    <Header></Header>
    <Active></Active>
  </div>
</template>

<script>
import Header from './components/Header'
import Active from './components/List/Active'

export default {
  name: 'app',
  components: {
    Header,
    Active,

  }
}
</script>

<style>
  @import "assets/style.css";
#app {

  height: auto;
  width: 700px;
  border:1px solid black;
  border-radius: 15px;
  margin-left: 30%;

}
</style>z
