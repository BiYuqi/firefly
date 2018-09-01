<template>
  <el-dialog
    title="设置"
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
      <el-radio-group v-model="tipModel" style="width: 100%">
        <div class="firefly-radio-box">
          <el-radio class="firefly-radio" label="1" border>默认</el-radio>
          <el-radio class="firefly-radio" label="2" border>苹果</el-radio>
          <el-radio class="firefly-radio" label="3" border>电脑QQ</el-radio>
        </div>
        <div class="firefly-radio-box">
          <el-radio class="firefly-radio" label="4" border>手机QQ</el-radio>
          <el-radio class="firefly-radio" label="5" border>陌陌</el-radio>
          <el-radio class="firefly-radio" label="6" border>探探</el-radio>
        </div>
      </el-radio-group>
    </div>
    <div class="intro">
      <p>背景图</p>
      <el-upload
        class="avatar-uploader"
        action=""
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="firefly-user-avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="intro">
      <p>主题颜色</p>
      <div class="current">
        <el-color-picker
          v-model="selectBg"
          show-alpha>
        </el-color-picker>
      </div>
    </div>
    <div class="intro">
      <p>文字颜色</p>
      <div class="current">
        <el-color-picker
          v-model="selectTx"
          show-alpha>
        </el-color-picker>
      </div>
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
      tipModel: '1',
      selectBg: 'rgb(74, 144, 226)',
      selectTx: '#666',
      imageUrl: require('../../../../assets/basic-bg3.jpg')
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {

    },
    beforeAvatarUpload (file) {

    }
  }
}
</script>

<style lang="scss" scoped>
.firefly-set-wrap{
  .intro{
    margin-bottom: 25px;
    p{
      font-weight: 900;
      margin-bottom: 10px;
      font-size: 16px;
      color: #000;
    }
    .firefly-user-avatar{
      width: 98%;
      cursor: pointer;
      transition: all .24s;
      &:hover{
        filter: blur(2px);
      }
    }
    .sound-set{
      margin-right: 30px;
    }
    .firefly-radio-box{
      margin-bottom: 15px;
      
      .firefly-radio{
        width: 30%;
      }
    }
    .current{
      display: flex;
      justify-content: flex-start;
      .c-c {
        width: 20px;
        height: 20px;
        margin-right: 14px;
      }
    }
  }
}
</style>