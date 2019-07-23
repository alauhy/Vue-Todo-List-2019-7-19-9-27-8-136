<template>
    <div id="addbox">
        <input type="text" v-model.trim="toDoEvent" @keyup.enter="sendTodo">
        <button class="add-button" @click="sendTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "AddBox",
        data(){
            return{
                toDoEvent:''
            }
        },
        methods:{
            sendTodo:function () {
                this.$emit("sendTodo",this.toDoEvent);
                this.toDoEvent=''

            }
        }

    }
</script>

<style scoped>
  @import "../assets/style.css";

</style>
