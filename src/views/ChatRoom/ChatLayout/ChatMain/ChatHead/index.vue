<template>
  <div class="firefly-chat-header">
    <div class="firefly-active-chat">firefly</div>
    <div class="firefly-active-chat">
      <svg-icon
        name="share"
        class="firefly-icon"
        size="24"
        color="rgb(6, 147, 227)">
      </svg-icon>
      <svg-icon
        name="gongneng"
        class="firefly-icon"
        size="24"
        color="rgb(6, 147, 227)">
      </svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.firefly-chat-header{
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid hsla(0,0%,82%,.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  .firefly-active-chat{
    color: #333;
    font-size: 16px;
  }
  .firefly-icon{
    cursor: pointer;
    margin: 0 6px;
  }
}
</style>