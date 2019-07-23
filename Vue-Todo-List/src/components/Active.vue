<template>

    <div id="active">
        <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl" v-for="(n,index) in toDoList" v-bind:key="index">
                <span v-if="n.isShow">
                <span v-if="n.status" class="div-body-data-table-dl-del-index">{{index+1}}.</span>
                <span v-else>{{index+1}}.</span>
                 <span :class="{pink:(index +1) %2 === 0,normal:(index +1) %2 === 1}">
                <Checkbox v-model="n.status" size="large" class="div-body-data-table-dl-checkbox"
                          @click="setStatus(index)"></Checkbox>
                <span :class="{'div-body-data-table-dl-del':n.status}" v-if="n.editable" @dblclick="setEditable(index)">{{n.content}}</span>
                     <input v-else type="text" v-model="n.content" @blur="updateToDos(index,n)">

                </span>
                    <button class="del-button" @click="delToDos(n.id)">x</button>

                </span>

            </dt>
        </dl>




    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Active",
        data(){
          return{
          }
        },
        computed:mapState({
           toDoList:state=>state.todolist
        }),
        methods: {
            setStatus: function (ev, index) {
                if (ev.target.checked) {
                    this.$store.commit('setStatusFalse',index)
                }this.$store.commit('setStatusTrue',index)
            },
            delToDos(id){
                this.$store.dispatch('delToDos',id)
            },
            setEditable(index){
                this.$store.commit('setEditableFalse',index)
            },
            updateToDos(index){
                this.$store.dispatch('putToDos',{
                    content:toDoList[index].content,
                })
            }



        }
    }
</script>

<style scoped>
    @import "../assets/style.css";

</style>