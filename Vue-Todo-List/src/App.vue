<template>
  <div id="app">
    <Header></Header>
    <TextArea></TextArea>
  </div>
</template>

<script>
import Header from './components/Header'
import TextArea from './components/TextArea'
export default {
  name: 'app',
  components: {
    Header,
    TextArea
  }
}
</script>

<style>
#app {

  height: auto;
  width: px;
  border:1px solid black;
  border-radius: 15px;
  margin-left: 30%;

}
</style>z
