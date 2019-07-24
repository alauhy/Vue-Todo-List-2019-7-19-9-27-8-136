<template>
    <div id="list">
        <a-layout>
            <a-layout-header><Header></Header></a-layout-header>
            <a-layout-content>
                <AddBox></AddBox>
                <Active></Active>
            </a-layout-content>
            <a-layout-footer><FootButton></FootButton></a-layout-footer>
        </a-layout>

    </div>
</template>

<script>
    import Header from '../components/Header'
    import Active from '../components/Active'
    import AddBox from '../components/AddBox'
    import FootButton from '../components/FootButton'
    export default {
        name: "list",
        components: {
            Header,
            Active,
            AddBox,
            FootButton

        },
        mounted(){
            this.$store.dispatch('getToDos')
        },

        methods:{

            addToList(toDoEvent) {

                this.$store.dispatch('postToDos',toDoEvent)
                // debugger;


            }
        }

    }
</script>

<style scoped>
    #list {

        height: auto;
        width: 100%;
        border-width: 0;
    }
    .ant-layout-content {
         background: white;
         min-height: 120px;
     }

</style>