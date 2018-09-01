<template>
  <div class="avatar-part" @click="showInfo">
    <img src="~assets/logo.png" alt="">
    <span class="badge offline">
      <i></i>
    </span>
    <editor-info ref="editor"></editor-info>
  </div>
</template>

<script>
import EditorInfo from '../ModelItem/EditorInfo'
export default {
  data () {
    return {}
  },
  methods: {
    showInfo () {
      this.$refs.editor.editorFlag = true
    }
  },
  components: {
    EditorInfo
  }
}
</script>

<style lang="scss" scoped>
.avatar-part{
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 50px;
  position: relative;
  background-color: #fff;
  img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .badge{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(74, 144, 226, 0.85);
    i{
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    &.offline{
      i{
        background-color: rgb(189, 72, 72);
      }
    }
    &.online{
      i{
        background-color: rgb(48, 198, 98);
      }
    }
  }
}
</style>
