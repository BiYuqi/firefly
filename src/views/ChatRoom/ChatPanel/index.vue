<template>
  <div class="chat-panel">
    <chat-list></chat-list>
    <chat-main></chat-main>
  </div>
</template>

<script>
import ChatList from './ChatList'
import ChatMain from './ChatMain'
export default {
  name: 'chat-panel',
  data () {
    return {
    }
  },
  components: {
    ChatList,
    ChatMain
  }
}
</script>

<style lang="scss" scoped>
.chat-panel{
  display: flex;
  flex: 1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
