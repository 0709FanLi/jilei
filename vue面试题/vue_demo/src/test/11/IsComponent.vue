<template>
    <div class="container">
        <div class="itemBox" @click="tabPage(1)" >
            页面1
        </div>
        <div class="itemBox" @click="tabPage(2)" >
            页面2
        </div>
        <div class="itemBox" @click="tabPage(3)" >
            页面3
        </div>
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>

        <!-- is 动态组件 用法 -->

        <!-- <Tab1 v-if="page == 1" />
        <Tab2 v-if="page == 2" />
        <Tab3 v-if="page == 3" /> -->

    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: top;
}
.itemBox{
        width: 120px;
        height: 50px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: top;
    }
</style>

<script>

import Tab1 from './Components/Tab1';
import Tab2 from './Components/Tab2';
import Tab3 from './Components/Tab3';

export default {
    components:{
        Tab1,
        Tab2,
        Tab3,
    },
    data(){
        return {
            page:1,
            currentView:'Tab1'
        }
    },
    methods: {
        tabPage(index){
            this.currentView = 'Tab' + index;
        }
    },
}
</script>