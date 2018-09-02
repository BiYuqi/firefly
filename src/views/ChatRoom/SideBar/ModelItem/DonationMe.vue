<template>
  <el-dialog
    title="打赏"
    width="40%"
    :close-on-click-modal="false"
    :visible.sync="donationFlag"
    append-to-body
    lock-scroll>
    <div class="intro">
      <img src="~assets/weixin.jpg" alt="微信收款">
      <img src="~assets/alipay.jpg" alt="支付宝收款">
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      donationFlag: false
    }
  }
}
</script>

<style lang="scss" scoped>
.intro{
  display: flex;
  justify-content: space-around;
  img{
    width: 200px;
    height: 300px;
  }
}
</style>