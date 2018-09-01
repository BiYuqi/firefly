<template>
  <el-dialog
    title="关于"
    width="40%"
    custom-class="firefly-set-wrap"
    :close-on-click-modal="false"
    :visible.sync="setFlag"
    append-to-body
    lock-scroll>
    <div class="intro">
      <p>重置</p>
      <div class="avatar-preview">
        <el-button type="primary">重置默认主题</el-button>
        <el-button type="primary">重置默认提示音</el-button>
      </div>
    </div>
    <div class="intro">
      <p>开关</p>
      <div class="avatar-preview">
        <el-switch
          v-model="soundFlag"
          class="sound-set"
          active-color="#13ce66"
          inactive-color="gray"
          active-text=""
          inactive-text="声音提醒">
        </el-switch>
        <el-switch
          v-model="speakFlag"
          active-color="#13ce66"
          inactive-color="gray"
          active-text=""
          inactive-text="语音播报">
        </el-switch>
      </div>
    </div>
    <div class="intro">
      <p>提示音</p>
      <el-radio-group v-model="tipModel" size="small">
        <div class="firefly-radio-box">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
          <el-radio label="3" border>备选项1</el-radio>
        </div>
        <div class="firefly-radio-box">
          <el-radio label="4" border>备选项2</el-radio>
          <el-radio label="5" border>备选项1</el-radio>
          <el-radio label="6" border>备选项2</el-radio>
        </div>
      </el-radio-group>
    </div>
    <div class="intro">
      <p>背景图</p>
      <img class="firefly-user-avatar" src="~assets/basic-bg3.jpg" alt="">
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      setFlag: false,
      soundFlag: true,
      speakFlag: true,
      tipModel: '1'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.firefly-set-wrap{
  .intro{
    margin-bottom: 25px;
    p{
      font-weight: 800;
      margin-bottom: 10px;
    }
    .firefly-user-avatar{
      width: 98%;
    }
    .sound-set{
      margin-right: 30px;
    }
    .firefly-radio-box{
      margin-bottom: 15px;
    }
  }
}
</style>