<template>
    <div id="active">
        <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl" v-for="(n,index) in toDoList" v-bind:key="index">
                <span v-if="n.status" class="div-body-data-table-dl-del">{{index+1}}.</span>
                <span v-else>{{index+1}}.</span>
                <Checkbox v-model="n.status" size="large" class="div-body-data-table-dl-checkbox"
                              @click="setStatus(index)"></Checkbox>
                <del v-if="n.status" class="div-body-data-table-dl-del ">{{n.content}}</del>
                <span v-else>{{n.content}}</span>
            </dt>
        </dl>


    </div>
</template>

<script>
    export default {
        name: "Active",
        data() {
            return {
                toDoList: [{content: '123', status: true}, {content: '456', status: true}, {content: '789', status: true}]
            }
        },
        methods: {
            setStatus: function (ev, index) {
                if (ev.target.checked) {
                    this.toDoList.status[index] = false;
                } else this.toDoList.status[index] = true;
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/style.css";

</style>