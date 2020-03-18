<template>
    <div class="propsBox">
        <h1>{{propsText}}</h1>
    </div>
</template>
<style scoped>
    .propsBox{
        color:aqua;
    }
</style>
<script>

import vue from 'vue';

export default {
    props:{
        propsText:{
            type: String,
            require: true,
        }
    }
}
</script>