<template>
  <div class="chat-main">
    <chat-head></chat-head>
    <chat-body></chat-body>
    <chat-foot></chat-foot>
  </div>
</template>

<script>
import ChatHead from './ChatHead'
import ChatBody from './ChatBody'
import ChatFoot from './ChatFooter'
export default {
  components: {
    ChatHead,
    ChatBody,
    ChatFoot
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/common.scss';
.chat-main{
  background-color: $bgMain;
  flex: 1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: hsla(0,0%,95%,.6);
  overflow: hidden;
  position: relative;
}
</style>
