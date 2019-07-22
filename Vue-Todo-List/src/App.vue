<template>
  <div id="app">
    <Header></Header>
    <AddBox @sendTodo="addToList"></AddBox>
    <Active ></Active>

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

  mounted(){
    this.axios.get('http://5d3576325b83cd0014d0adb9.mockapi.io/api/v1/todolist').then(res=>
    {
      this.$store.commit('toSetList',res.data)
    })
  },
  watch:{
    watchTheList(){
      this.$store.state.todolist
    }

  },
  methods:{

    addToList(toDoEvent) {

      this.$store.commit('addToList',{
        content:toDoEvent,
        status:false,
        isShow:true
      })
      debugger;


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
