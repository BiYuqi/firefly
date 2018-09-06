<template>
  <div class="firefly-chat-footer">
    <div class="login-ok" v-if="$store.state.hasToken">
      <div class="emoji">
        <express-com
          @expression="expression">
        </express-com>
      </div>
      <div class="function">
        <msg-types
          @msg-type="msgType">
        </msg-types>
      </div>
      <div class="text-input">
        <el-input v-model="sendMsg" placeholder="大侠，留步说两句..."></el-input>
      </div>
      <div class="send">
        <svg-icon name="send" size="30" color="#aaa"></svg-icon>
      </div>
    </div>
    <div class="un-login" v-else>
      游客朋友你好，请<span @click="login">登录</span>后参与聊天
    </div>
    <login-regist ref="loginRegist"></login-regist>
  </div>
</template>

<script>
import LoginRegist from '@/views/LoginRegist'
import ExpressCom from '@/views/ToolItem/Expression'
import MsgTypes from '@/views/ToolItem/MsgType'
export default {
  data () {
    return {
      sendMsg: ''
    }
  },
  methods: {
    login () {
      this.$refs.loginRegist.loginRegister = true
    },
    expression (name) {
      this.$message.success(`#(${name})`)
    },
    msgType (type) {
      this.$message.success(type)
    }
  },
  components: {
    LoginRegist,
    ExpressCom,
    MsgTypes
  }
}
</script>

<style lang="scss">
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
  .login-ok{
    display: flex;
    // justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    .emoji,
    .send,
    .function,{
      margin: 0 10px;
      display: flex;
      align-items: center;
      span{
        display: flex;
        align-items: center;
      }
    }
    .text-input{
      display: flex;
      align-items: center;
    }
    .icon-emoji,
    .icon-function,
    .icon-send{
      cursor: pointer;
      transition: color .24s;
      display: inline-block;
      &:hover{
        color: #0693e3 !important;
      }
    }
    .text-input{
      flex: 1;
    }
    .el-input__inner{
      border: 1px solid hsla(0,0%,82%,.5);
      height: 35px;
      line-height: 35px;
    }
    .el-input__inner:focus{
      border: 1px solid hsla(0,0%,82%,.5);
    }
    .el-input__inner::-webkit-input-placeholder {
      color: #999;
    }
    .el-input__inner:-ms-input-placeholder {
      color: #999;
    }
    .el-input__inner::placeholder {
      color: #999;
    }
  }
}
</style>