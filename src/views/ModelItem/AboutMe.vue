<template>
  <el-dialog
    title="关于"
    width="40%"
    :close-on-click-modal="false"
    :visible.sync="aboutFlag"
    append-to-body
    lock-scroll>
    <div class="intro">
      <p>作者主页</p>
      <a target="_blank" href="https://loadingmore.com">https://loadingmore.com</a>
    </div>
    <div class="intro">
      <p>如何运行</p>
      <a target="_blank" href="https://github.com/BiYuqi/firefly/blob/master/README.md">https://github.com/BiYuqi/firefly/blob/master/README.md</a>
    </div>
    <div class="intro">
      <p>输入快捷键盘</p>
      <ul>
        <li>暂无</li>
        <li>暂无</li>
      </ul>
    </div>
    <div class="intro">
      <p>TODO</p>
      <ul>
        <li>登录，注册</li>
        <li>群聊，私聊</li>
        <li>主题修改</li>
        <li>配置信息</li>
      </ul>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      aboutFlag: false
    }
  }
}
</script>

<style lang="scss" scoped>
.intro{
  margin-bottom: 25px;
  p{
    font-weight: 800;
    margin-bottom: 10px;
  }
  a{
    color: rgb(31, 124, 161);
  }
  ul{
    // list-style: none;
    padding-left: 30px;
  }
}
</style>
