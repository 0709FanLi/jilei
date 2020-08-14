<template>
    <div class="container">
        <div>
            <el-card shadow="always">
                我是页面1
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
}
</script>

<!-- 添加scoped css只对当前组件有用 -->
<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex:1;
    background-color: #eee;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>