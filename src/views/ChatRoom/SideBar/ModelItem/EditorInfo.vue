<template>
  <el-dialog
    title="修改信息"
    width="40%"
    :close-on-click-modal="false"
    :visible.sync="editorFlag"
    append-to-body
    lock-scroll>
    <div class="intro">
      <p>修改头像</p>
      <div class="avatar-preview">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="intro">
      <p>修改密码</p>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="60px">
        <el-form-item label="账号" prop="oldpass">
          <el-input v-model="form.oldpass" placeholder="旧密码"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="newpass">
          <el-input v-model="form.newpass" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="okChange('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      } else {
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        callback()
      }
    }
    return {
      editorFlag: false,
      form: {
        oldpass: '',
        newpass: ''
      },
      rules: {
        oldpass: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePass
          }
        ],
        newpass: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePass2
          }
        ]
      },
      imageUrl: require('../../../../assets/logo.png')
    }
  },
  methods: {
    okChange (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess (res, file) {

    },
    beforeAvatarUpload (file) {

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
  img{
    width: 100px;
    height: 100px;
    border: 1px dashed rgb(26, 141, 194);
  }
}
</style>
