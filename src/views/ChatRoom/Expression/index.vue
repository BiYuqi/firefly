<template>
  <el-popover
    placement="top"
    popper-class="firefly-emoji-wrap"
    width="400"
    :offset="-180"
    :visible-arrow="false"
    v-model="emojiFlag"
    trigger="click">
    <el-tabs v-model="activeName">
      <el-tab-pane label="默认表情" name="static" class="default-expression">
        <div
          class="firefly-emoji"
          v-for="(item, index) in expressionDefault"
          :key="index"
          @click="selectEmoji(item)">
          <div class="firefly-emoji-item" :style="{backgroundPosition: `left ${-30 * index}px`, backgroundImage: `url(${require('../../../assets/emoji.png')})` }">
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <svg-icon
      slot="reference"
      name="emoji"
      size="30"
      color="#aaa">
    </svg-icon>
  </el-popover>
</template>

<script>
import expression from '@/utils/expression'
export default {
  data () {
    return {
      activeName: 'static',
      emojiFlag: false,
      expressionDefault: expression.default
    }
  },
  methods: {
    selectEmoji (name) {
      this.$emit('expression', name)
      this.emojiFlag = false
    }
  }
}
</script>

<style lang="scss">
.firefly-emoji-wrap{
  .default-expression{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .firefly-emoji{
    width: 40px;
    height: 40px;
    padding: 5px;
    transition: all .3s;
    cursor: pointer;
    &:hover{
      background-color: #e9e9e9;
    }
    .firefly-emoji-item{
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-size: 30px auto;
    }
  }
}
</style>
