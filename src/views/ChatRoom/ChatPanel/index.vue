<template>
  <div class="chat-panel">
    <panel-list></panel-list>
    <chat-main></chat-main>
  </div>
</template>

<script>
import PanelList from './PanelList'
import ChatMain from './ChatMain'
export default {
  name: 'chat-panel',
  data () {
    return {
    }
  },
  components: {
    PanelList,
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
