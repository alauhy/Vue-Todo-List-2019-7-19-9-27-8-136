<template>
    <div id="list">
        <Header></Header>
        <AddBox @sendTodo="addToList"></AddBox>
        <Active ></Active>
        <FootButton></FootButton>
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
        width: 700px;
        border:1px solid black;
        border-radius: 15px;
        margin-left: 30%;

    }

</style>