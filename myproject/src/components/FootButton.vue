<template>
    <div id="foot-button">
         <span class="footer-span">
            <button class="footer-div-button" @click="atAll">ALL</button>
             <button class="footer-div-button" @click="atActive">Active</button>
             <button class="footer-div-button" @click="atComplete">Complete</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "FootButton",
        methods:{
            atAll: function () {

                this.$store.commit('atAll')

            },
            atActive: function () {
                this.$store.commit('atActive')

            },
            atComplete: function () {
                this.$store.commit('atComplete')

            }
        }
    }
</script>

<style scoped>

</style>