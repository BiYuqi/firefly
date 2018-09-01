<template>
  <div class="dashboard">
    <div class="chat-blur"></div>
    <div class="chat-root">
      <chat-room></chat-room>
    </div>
  </div>
</template>

<script>
import ChatRoom from './ChatRoom'
export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  components: {
    ChatRoom
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('../assets/basic-bg2.jpg') no-repeat;
  background-size: cover;
  position: relative;
  .chat-root{
    position: absolute;
    top: 10%;
    left: 15%;
    width: 70%;
    height: 85%;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(0, 0, 0, .5);
    z-index: 1;
  }
  .chat-blur {
    position: absolute;
    top: 10%;
    left: 15%;
    width: 70%;
    height: 85%;
    filter: blur(10px);
    background-image: url('../assets/basic-bg2.jpg');
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>
