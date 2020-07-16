<template>
  <div class="container">
    <el-card class="box-card">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template slot="title">
                总是显示
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- 添加scoped css只对当前组件有用 -->
<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
}
.box-card{
  width:90%;
  height: auto;
}
</style>
