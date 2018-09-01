<template>
  <div class="firefly-chat-footer">
    <div class="un-login">
      游客朋友你好，请<span @click="login">登录</span>后参与聊天
    </div>
    <login-regist ref="loginRegist"></login-regist>
  </div>
</template>

<script>
import LoginRegist from '@/views/Login'
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      this.$refs.loginRegist.loginRegister = true
    }
  },
  components: {
    LoginRegist
  }
}
</script>

<style lang="scss" scoped>
.firefly-chat-footer{
  height: 70px;
  line-height: 70px;
  background-color: hsla(0,0%,100%,.5);
  border-bottom-right-radius: 10px;
  .un-login{
    text-align: center;
    span{
      color: #0693e3;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
    }
  }
}
</style>