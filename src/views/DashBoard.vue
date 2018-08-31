<template>
  <div class="dashboard">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the firefly chat room'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  margin-top: 50px;
  font-size: 40px;
}
</style>
