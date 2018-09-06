<template>
  <el-dialog
    width="320px"
    :close-on-click-modal="false"
    :visible.sync="addFlag"
    custom-class="add-friend-dialog"
    append-to-body
    lock-scroll>
    <div class="add-friend-dialog-wrap">
      <div class="top">
        <img class="avatar-prev" src="~assets/logo.png" alt="">
      </div>
      <div class="bot">
        <el-button type="primary" @click="addPeople">加为好友</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      addFlag: false
    }
  },
  methods: {
    addPeople () { 
    }
  }
}
</script>

<style lang="scss">
.add-friend-dialog{
  .el-dialog__header{
    padding: 0;
  }
  .el-dialog__body{
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 15px;
  }
}
.add-friend-dialog-wrap{
  .top{
    height: 120px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    img{
      width: 70px;
      height: 70px;
      display: block;
      border-radius: 50%;
    }
  }
  .bot{
    display: flex;
    justify-content: center;
  }
  .el-button{
    width: 80%;
  }
}

</style>
