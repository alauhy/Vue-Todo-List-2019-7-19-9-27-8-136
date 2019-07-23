<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
    @import "assets/style.css";

    #app {

        height: auto;
        width: 700px;
        border: 1px solid black;
        border-radius: 15px;
        margin-left: 30%;

    }
</style>
