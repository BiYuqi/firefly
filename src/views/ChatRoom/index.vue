<template>
  <div class="chat-room">
    <side-bar></side-bar>
    <chat-layout></chat-layout>
  </div>
</template>

<script>
import SideBar from './SideBar'
import ChatLayout from './ChatLayout'
export default {
  name: 'chat-room',
  data () {
    return {
    }
  },
  components: {
    SideBar,
    ChatLayout
  }
}
</script>

<style lang="scss" scoped>
.chat-room{
  display: flex;
  height: 100%;
}
</style>
