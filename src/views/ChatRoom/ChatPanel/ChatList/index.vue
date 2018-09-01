<template>
  <div class="chat-list">
    <search-box></search-box>
  </div>
</template>

<script>
import SearchBox from './SearchBox'
export default {
  components: {
    SearchBox
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