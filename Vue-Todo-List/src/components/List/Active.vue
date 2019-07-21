<template>

    <div id="active">
        <input type="text" v-model="toDoEvent">
        <button class="add-button" @click="sendTodo">Add</button>
        <dl class="div-body-data-table-dl" >
            <dt class="div-body-data-table-dl" v-for="(n,index) in toDoList" v-bind:key="index">
                <span v-if="n.isShow">
                <span v-if="n.status" class="div-body-data-table-dl-del">{{index+1}}.</span>
                <span v-else>{{index+1}}.</span>
                <Checkbox v-model="n.status" size="large" class="div-body-data-table-dl-checkbox"
                              @click="setStatus(index)"></Checkbox>
                <del v-if="n.status" class="div-body-data-table-dl-del ">{{n.content}}</del>
                <span v-else>{{n.content}}</span>
                </span>
            </dt>
        </dl>

        <span class="footer-span">
            <button class="footer-div-button" @click="atAll">ALL</button>
             <button class="footer-div-button" @click="atActive">Active</button>
             <button class="footer-div-button" @click="atComplete">Complete</button>
        </span>


    </div>
</template>

<script>
    export default {
        name: "Active",
        data() {
            return {
                toDoList: [],
                toDoEvent:''
            }
        },
        methods: {
            setStatus: function (ev, index) {
                if (ev.target.checked) {
                    this.toDoList.status[index] = false;
                } else this.toDoList.status[index] = true;
            },
            sendTodo:function () {
                this.toDoList.push({
                    content: this.toDoEvent,
                    isShow:true,
                    status: false

                })
                this.toDoEvent = ''
            },
            atAll:function () {

                this.toDoList.map(e=>e.isShow=true);

            },
            atActive:function () {
                this.toDoList.map(e=>{
                    e.status ? e.isShow = false :e.isShow =true
                });

            },
            atComplete:function () {
                this.toDoList.map(e=>{
                    e.status ? e.isShow = true :e.isShow =false
                });

            }

        }
    }
</script>

<style scoped>
    @import "../../assets/style.css";

</style>