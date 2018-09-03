<template>
  <el-popover
    placement="top"
    popper-class="firefly-msg-wrap"
    width="80"
    :offset="-20"
    :visible-arrow="false"
    v-model="functionFlag"
    trigger="click">
    <ul class="firefly-msg-ul">
      <li
        class="firefly-msg-item"
        v-for="(item, index) in typeList"
        :key="index"
        @click="selectMsg(item.type)">
        {{ item.msg }}
      </li>
    </ul>
    <svg-icon
      slot="reference"
      name="function"
      size="30"
      color="#aaa">
    </svg-icon>
  </el-popover>
</template>

<script>
export default {
  data () {
    return {
      functionFlag: false,
      typeList: [
        {type: 'gaoxiao', msg: '发送搞笑'},
        {type: 'image', msg: '发送图片'},
        {type: 'code', msg: '发送代码'}
      ]
    }
  },
  methods: {
    selectMsg (type) {
      this.$emit('msg-type', type)
      this.functionFlag = false
    }
  }
}
</script>

<style lang="scss">
.firefly-msg-wrap{
  list-style: none;
  min-width: 100px !important;
  padding: 0;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 4px #d9d9d9;
  border-radius: 3px;
  .firefly-msg-ul{
    list-style: none;
  }
  .firefly-msg-item{
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    padding: 0 12px;
    text-align: center;
    &:hover{
      background-color: #eaf8fe;
    }

  }
}
</style>
