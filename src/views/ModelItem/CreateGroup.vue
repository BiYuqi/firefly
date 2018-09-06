<template>
  <el-dialog
    title="创建房间"
    width="420px"
    :close-on-click-modal="false"
    :visible.sync="createFlag"
    append-to-body
    lock-scroll>
    <div class="intro">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="90px">
        <el-form-item label="房间昵称" prop="groupName">
          <el-input v-model="form.groupName" placeholder="请输入房间昵称..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createGroup('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      createFlag: false,
      form: {
        groupName: ''
      },
      rules: {
        groupName: [
          {
            required: true,
            message: '房间名不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    createGroup (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
