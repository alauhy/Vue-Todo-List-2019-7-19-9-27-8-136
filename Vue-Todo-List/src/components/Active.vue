<template>

    <div id="active">
        <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl" v-for="(n,index) in toDoList" v-bind:key="index">
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
        props:[
            'toDoList'

        ],
        methods: {
            setStatus: function (ev, index) {
                if (ev.target.checked) {
                    this.toDoList.status[index] = false;
                } else this.toDoList.status[index] = true;
            },

            atAll: function () {

                this.toDoList.map(e => e.isShow = true);

            },
            atActive: function () {
                this.toDoList.map(e => {
                    e.status ? e.isShow = false : e.isShow = true
                });

            },
            atComplete: function () {
                this.toDoList.map(e => {
                    e.status ? e.isShow = true : e.isShow = false
                });

            }

        }
    }
</script>

<style scoped>
    @import "../assets/style.css";

</style>