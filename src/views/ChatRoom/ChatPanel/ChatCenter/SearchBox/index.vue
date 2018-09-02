<template>
  <div class="firefly-search-list">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="searchName">
    </el-input>
    <svg-icon
      class="firefly-plus"
      name="plus"
      size="36"
      color="hsla(0,0%,100%,.5)"
      @click.native="createGroup">
    </svg-icon>
    <create-group ref="create"></create-group>
  </div>
</template>

<script>
import CreateGroup from '@/views/ModelItem/CreateGroup'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    createGroup () {
      this.$refs.create.createFlag = true
    }
  },
  components: {
    CreateGroup
  }
}
</script>

<style lang="scss">
.firefly-search-list{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .firefly-plus{
    cursor: pointer;
    margin-left: 15px;
    transition: all .24s;
    &:hover{
      color: rgb(247, 241, 241) !important;
    }
  }
  .el-input__inner{
    // background-color: #f5f5f5;
    background-color: hsla(0,0%,100%,.5);
    border-radius: 25px;
    height: 50px;
    line-height: 50px;
    border: none;
    transition: all .24s;
    &:focus{
      background-color: hsla(0,0%,100%,.9);
    }
  }
  .el-input__prefix, .el-input__suffix{
    color: #666;
  }
  .el-input__inner::-webkit-input-placeholder {
    color: #666;
  }
  .el-input__inner:-ms-input-placeholder {
    color: #666;
  }
  .el-input__inner::placeholder {
    color: #666;
  }
}
</style>