<template>
    <div class="inputBox">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <h2>{{world}}</h2>
        <router-link to='/props'>
            <el-button type="primary" plain>跳转</el-button>
        </router-link>
    </div>
</template>
<style scoped>
.inputBox{
    width: 200px;
    margin-bottom: 20px;
}
</style>

<script>
export default {
    name:'testKeepLive',
    data() {
        return {
            input:'',
            world:'Hello World!'
        }
    },
    activated() {
        console.log('组件被激活', this);
    },
    //keep-alive钩子函数：组件消失，被缓存时调用
    deactivated() {
        console.log('组件被缓存',this);
    },
    mounted() {
        let _this = this;
        // setTimeout(function(){
        //     _this.world = 'Hello YUAN!'
        // },2000)
    },
}
</script>