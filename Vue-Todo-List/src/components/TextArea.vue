<template>
    <div id="textArea">
        <input type="text">
        <button>Add</button>
    </div>

</template>

<script>
    export default {
        name: "TextArea"
    }
</script>

<style scoped>
    input {
        width: 500px;
        height: 25px;
        margin: 10px;
    }

    button {
        border-radius: 5px;
        background-color: palevioletred;
        font-size: 20px;
        color: white;
        width: 80px;
        height: 35px;
    }
</style>