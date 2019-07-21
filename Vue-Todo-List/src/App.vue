<template>
  <div id="app">
    <Header></Header>
    <TextArea></TextArea>
    <Active></Active>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import TextArea from './components/TextArea'
import Active from './components/List/Active'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    TextArea,
    Active,
    Footer
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
