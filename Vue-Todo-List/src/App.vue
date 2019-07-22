<template>
  <div id="app">
    <Header></Header>
    <AddBox @sendTodo="addToList"></AddBox>
    <Active :toDoList="toDoList"></Active>

  </div>
</template>

<script>
import Header from './components/Header'
import Active from './components/Active'
import AddBox from './components/AddBox'

export default {
  name: 'app',
  components: {
    Header,
    Active,
    AddBox

  },
  data(){
    return{
      toDoList: [],
    }
  },
  methods:{
    addToList(toDoEvent) {
      this.toDoList.push({
        content:toDoEvent,
        status:false,
        isShow:true
      })


    }
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
