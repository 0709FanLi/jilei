<template>
    <div class="container">
        <h2>{{word}}</h2>
        <keep-alive include="testKeepLive">
            <TestKeepAlive />
        </keep-alive>
        <div class="inputBox">
            <input placeholder="输入框"/>
        </div>
        <router-link to='/props'>
            <el-button type="primary" plain>跳转</el-button>
        </router-link>
        <!-- 缓存就是说不会触发生命周期 -->
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputBox{
    width: 200px;
    margin-bottom: 10px;
}
</style>

<script>
import TestKeepAlive from './Components/TestkeepAlive'
export default {
    components:{
        TestKeepAlive
    },
    data(){
        return {
            word:'Hello Word!',
            input:'',
        }
    },
    mounted() {
        this.word = 'LALALA';
    },
}
</script>