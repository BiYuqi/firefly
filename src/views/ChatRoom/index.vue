<template>
  <div class="chat-room">
    <side-bar></side-bar>
    <chat-panel></chat-panel>
  </div>
</template>

<script>
import SideBar from './SideBar'
import ChatPanel from './ChatPanel'
export default {
  name: 'chat-room',
  data () {
    return {
    }
  },
  components: {
    SideBar,
    ChatPanel
  }
}
</script>

<style lang="scss" scoped>
.chat-room{
  display: flex;
  height: 100%;
}
</style>
