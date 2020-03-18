<template>
    <div class="propsBox">
        <PropsComponent
            propsText = '我是h1'
        />
        <PropsComponent
            :propsText = 'otherText'
        />
        <h2>我是h2</h2>
        <h2>{{text}}</h2>
        <keep-alive>
            <router-link to='/keepAlive'>
                <el-button type="primary" plain>跳转</el-button>
            </router-link>
        </keep-alive>
    </div>
</template>
<style scoped>
    .propsBox{
        color:hotpink;
    }
</style>
<script>

import vue from 'vue';
import PropsComponent from '@/test/8/PropsComponent'

export default {
    components:{
        PropsComponent
    },
    data(){
        return {
            text:'我是h3',
            otherText:'我是另一个h1'
        }
    },
}
</script>