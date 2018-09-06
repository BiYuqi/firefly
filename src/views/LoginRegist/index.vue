<template>
  <el-dialog
    width="450px"
    :close-on-click-modal="false"
    :visible.sync="loginRegister"
    class="login-dialog"
    append-to-body
    lock-scroll>
    <span slot="header"></span>
    <div class="tab-group">
      <div class="tab-header">
        <div class="tab-item" :class="{active: tabIndex === 0}" @click="tabChange(0)">登录</div>
        <div class="tab-item" :class="{active: tabIndex === 1}" @click="tabChange(1)">注册</div>
      </div>
      <div class="tab-content">
        <div class="tab-con-item" v-show="tabIndex === 0">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="rules"
            label-width="60px">
            <el-form-item label="账号" prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 100%" type="primary" @click="loginSubmit('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="tab-con-item" v-show="tabIndex === 1">
          <el-form
            ref="registerForm"
            :model="registerForm"
            :rules="rules"
            label-width="60px">
            <el-form-item label="账号" prop="username">
              <el-input
                v-model="registerForm.username"
                placeholder="用户名即昵称，请谨慎填写">
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="registerForm.password"
                placeholder="密码">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 100%" type="primary" @click="registerSubmit('registerForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { userLogin, userRegister } from '@/api/userInfo'
import { getSha1, checkName, checkPass } from '@/utils/crypto'
export default {
  data () {
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } if (!checkName(value)) {
        callback(new Error('用户名4~16位, 数字字母下划线组成'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } if (!checkPass(value)) {
        callback(new Error('密码6~16位, 必须由数字字母组成'))
      } else {
        callback()
      }
    }
    return {
      loginRegister: false,
      tabIndex: 0,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            validator: validateUser,
            required: true,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePass,
            required: true,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    tabChange (index) {
      this.tabIndex = index
    },
    loginSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = Object.assign({}, this.loginForm)
          formData.password = getSha1(this.loginForm.password)
          userLogin(formData).then(res => {
            this.$message.success(res.data.msg)
          }).catch(e => {
            this.$message.success(e)
          })
        } else {
          this.$message.success('参数不合法!')
          return false
        }
      })
    },
    registerSubmit (register) {
      this.$refs[register].validate((valid) => {
        if (valid) {
          userRegister(this.registerForm).then(res => {
            this.$message.success(res.data.msg)
          }).catch(e => {
            this.$message.success(e)
          })
        } else {
          this.$message.success('参数不合法!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-dialog{
  .el-dialog__header{
    padding: 0;
  }
  .el-dialog{
    border-radius: 10px;
  }
  .el-tabs__nav{
    display: flex;
    justify-content: center;
  }
  .intro{
    display: flex;
    justify-content: space-around;
    img{
      width: 200px;
      height: 400px;
    }
  }
  .tab-group{
    border-radius: 10px;
    .tab-header{
      height: 40px;
      display: flex;
      border-bottom: 1px solid #f3f3f3;
      justify-content: center;
      align-items: center;
    }
    .tab-item{
      padding: 0 15px;
      font-size: 16px;
      font-weight: bold;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      &.active{
        color: #108ee9;
        border-bottom: 2px solid #108ee9;
      }
    }
    .tab-content{
      padding: 15px 0;
    }
  }
}
</style>
