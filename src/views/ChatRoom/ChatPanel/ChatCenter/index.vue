<template>
  <div class="chat-list">
    <search-box></search-box>
    <chat-list></chat-list>
  </div>
</template>

<script>
import SearchBox from './SearchBox'
import ChatList from '@/views/ChatRoom/ChatList'
export default {
  components: {
    SearchBox,
    ChatList
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/common.scss';
.chat-list{
  background-color: $bgList;
  width: 300px;
}
</style>