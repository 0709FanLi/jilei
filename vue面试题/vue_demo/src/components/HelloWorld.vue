<template>
  <div class="container">
    <el-card class="box-card">
      <el-collapse accordion>
        
        <el-collapse-item name="1">
          <template slot="title">
                1. vue的优点？
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb.<br />
            简单易学：国人开发，中文文档，不存在语言障碍，易于理解和学习。<br />
            组件化：保留了react的有点，实现了HTML的封装和重用，在构建单页面
                  应用有着独特的优势<br />
            视图，数据，结构分离：视图的修改更为简单，不需要进行逻辑代码的修改，
                    只需要操作数据就能完成相关视图的修改<br />
            虚拟dom：dom操作是十分消耗性能的，不再使用原生的dom操作节点，极大解放了
                    dom操作。<br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template slot="title">
                2. v-show和v-if指令的共同点和不同点？
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            共同点：都能控制元素的显示和隐藏<br />
            不同点：v-show 使用 css display:none 控制隐藏，dom树只会编译一次；
                  v-if   是动态的向dom树添加或删除元素，若初始值为false就不会编译，
                          v-if不停创建和销毁元素比较耗费性能<br />
            总结：如果要频繁切换某点，使用v-show(切换开销比较小，初始值比较大)。如果不需要
                频繁切换某点使用v-if(初始渲染开销较小，切换开销比较大)。<br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="3">
          <template slot="title">
                3. keep-alive 的作用是什么？
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            keep-alive 是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。<br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="4">
          <template slot="title">
                4. 在Vue中如何获取dom？
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            ref = 'domName' 用法：this.$refs.domName.<br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="5">
          <template slot="title">
                5. 为什么要使用key?
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            需要key给每一个节点做一个唯一标识，Diff算法就可以正确的识别此节点，
            作用主要是为了高效的更新虚拟dom.<br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="6">
          <template slot="title">
                6. v-on 可以监听多个方法吗?
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            可以 栗子：~input type="text" v-on="{input:onInput,focus:onFocus,blur:onBlur}" /~ <br />
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="14">
          <template slot="title">
                14. slot
          </template>
          <el-card style="margin-top:10px;" shadow="always">
            <router-link >
              应用场景:1)  你可以想象一个场景，你有五个页面，这五个页面中只有一个区域的内容不一样，
                          你会怎么去写这五个页面呢？复制粘贴是一种办法，但在vue中，插槽(slot)是更好的做法。<br>
            </router-link>
          </el-card>
        </el-collapse-item>

        <el-collapse-item name="15">
          <template slot="title">
                15. 路由跳转
          </template>
          <el-card style="margin-top:10px;" shadow="always">
              1 不带参数  
              <router-link to="routerTest">跳转</router-link>
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
      activeName: '1'
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
