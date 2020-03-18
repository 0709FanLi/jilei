<template>
    <div class="container">
        <h3>.stop阻止事件继续传播</h3>
        <h3>.prevent提交事件不再重载界面</h3>
        <h3>修饰符可以串联</h3>
        <h3>.capture点击事件先由 .capture处理 再由内部元素处理</h3>
        <h3>只当在 event.target 是当前元素自身时触发处理函数</h3>
        <h3>.once 只能点击一次</h3>
        <h3>scroll.passive  滚动会立即触发</h3>
        <div class="box1" @click="box1()">
            <div class="box2"  @click.stop="box2()"></div>
        </div>
        <div class="box1 box3" @click.capture="box3()">box3
            <div class="box1 box4"  @click="box4()">box4</div>
        </div>
        <div class="box1 box5" @click.self="box5()">box5
            <div class="box1 box6"  @click="box6()">box6</div>
        </div>
        <div  @click.once="box7()">box7</div>
        <div class="box8" v-on:scroll.passive.once="onScroll">
            <div class=" box9">box9</div>
        </div>
    </div>
</template>

<style scoped>
.box9{
    width: 50px;
    height: 300px;
    background-color: #69f;
}
.box8{
    width: 100px;
    height: 100px;
    overflow: scroll;
    background-color: purple;
}
.container{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box1{
    width: 100px;
    height: 100px;
    background-color: hotpink;
}
.box2{
    width: 50px;
    height: 50px;
    background-color: blue;
}
.box3{
    background-color: blueviolet;
}
.box4{
    width: 50px;
    height: 50px;
    background-color: rgb(29, 190, 42);
}
.box5{
    background-color: rgb(209, 23, 184);
}
.box6{
    width: 50px;
    height: 50px;
    background-color: rgb(211, 192, 18);
}
.box7{
    width: 100px;
    height: 100px;
    background-color: black;
}
</style>

<script>
export default {
    components:{

    },
    data(){
        return {
            test:1
        }
    },
    methods: {
        box1(){
            alert('我是box1')
        },
        box2(){
            alert('我是box2')
        },
        box3(){
            alert('我是box3')
        },
        box4(){
            alert('我是box4')
        },
        box5(){
            alert('我是box5')
        },
        box6(){
            alert('我是box6')
        },
        onSubmit(){
            this.test = 2
            console.log(this)
        },
        box7(){
            alert('我是box7')
        },
        onScroll(){
            console.log('111111');
        }
    },
    mounted() {
    },
}
</script>
