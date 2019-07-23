<template>

    <div id="active">
        <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl" v-for="(n,index) in this.$store.state.todolist" v-bind:key="index">
                <span v-if="n.isShow">
                <span v-if="n.status" class="div-body-data-table-dl-del">{{index+1}}.</span>
                <span v-else>{{index+1}}.</span>
                 <span v-if="(index+1) %2 ===0" class="pink">
                <Checkbox v-model="n.status" size="large" class="div-body-data-table-dl-checkbox"
                          @click="setStatus(index)"></Checkbox>
                <del v-if="n.status" class="div-body-data-table-dl-del ">{{n.content}}</del>
                <span v-else>{{n.content}}</span>
                </span>
                    <span v-else class="normal">
                <Checkbox v-model="n.status" size="large" class="div-body-data-table-dl-checkbox"
                          @click="setStatus(index)"></Checkbox>
                <del v-if="n.status" class="div-body-data-table-dl-del ">{{n.content}}</del>
                <span v-else>{{n.content}}</span>
                </span>

                </span>

            </dt>
        </dl>




    </div>
</template>

<script>
    export default {
        name: "Active",
        data(){
          return{
              toDoList:this.$store.state.todolist
          }
        },
       watch:{
            setList(){
                this.toDoList=this.$store.state.todolist
            }
       },
        methods: {
            setStatus: function (ev, index) {
                if (ev.target.checked) {
                    this.$store.commit('setStatusFalse',index)
                }this.$store.commit('setStatusTrue',index)
            }



        }
    }
</script>

<style scoped>
    @import "../assets/style.css";

</style>