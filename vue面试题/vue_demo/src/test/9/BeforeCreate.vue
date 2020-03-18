<template>
    <div class="befcreate">
        <div>beforecreath   在实例初始化后，数据观测(data observer)和event/watcher事件配置之前被调用</div>
        <div>created    在实例创建完成后被立即调用，在这一步实例已经完成以下配置：<hr>
            数据观察(data observer),属性和方法的运算，watch/event事件回调。<hr>
            然而，挂在阶段还未开始，$el属性目前尚不可用。
        </div>
        <div>
            beforeMount 在挂载开始之前被调用：相关的render函数首次被调用。<hr>
            该勾子在服务器端渲染期间不被调用
        </div>
        <div>
            mounted 实例被挂在后调用，这是el被创建的vm.$el替换了。<hr>
            如果根实例挂载到了一个文档内的元素上，当mounted被调用时vm.$le也在文档内。<hr>
            注意：mounted不会保证所有的子组件都会被挂载。<hr>
            如果希望等到整个视图都渲染完毕，可以在mounted内部使用vm.$nextTick <hr>
            该勾子函数在服务器端渲染期间不被调用
        </div>
        <div>
            beforeUpdate    数据更新时调用，发生虚拟dom打补丁之前。<hr>
            这里适合更新之前访问现有dom，比如手动移除已添加的事件监听器<hr>
            该钩子在服务器端渲染期间不被调用，因为初次渲染会在服务端进行
        </div>
        <div>
            updated      由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子 <hr>
            当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。然而在<hr>
            大多数情况下，你应该避免在此期间更改状态。如果要相应改变状态，<hr>
            通常最好使用计算属性或watcher取而代之。<hr>
            注意updated不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，<hr>
            可以在updated里边使用vm.$nextTick <hr>
            该钩子在服务器端渲染期间不被调用
        </div>
        <div>
            activated   被keep-live缓存的组件激活时调用
            该钩子在服务器端渲染期间不被调用
        </div>
        <div>
            deactivated   被keep-live缓存的组件停用时调用 <hr>
            该钩子在服务器端渲染期间不被调用
        </div>
        <div>
            beforeDestory   实例销毁前调用。在这一步，实例仍然完全可用。<hr>
            该钩子在服务器端渲染期间不被调用
        </div>
    </div>
</template>
<style scoped>

</style>

<script>
export default {
    beforeCreate() {    //  实例化 用来请假
        console.log('我是挂载前！')
    },
    created() {
        console.log('我是挂在后')
    },
}
</script>