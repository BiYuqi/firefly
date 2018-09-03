<template>
  <div class="firefly-chat-body">
    <div class="firefly-msg-list" :class="{self: i % 2 === 0}" v-for="i in 10" :key="i">
      <img class="avatar" @click="add(i)" :style="avatar" src="~assets/logo.png" alt="">
      <div class="firefly-msg-right">
        <div class="firefly-msg-top">
          <span class="name">firefly</span>
          <span class="time">5分钟前</span>
        </div>
        <div class="firefly-msg-content">
          <div class="text">第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否方斯蒂芬是否第三方斯蒂芬是否第三方斯蒂芬是否</div>
        </div>
      </div>
    </div>
    <add-friend ref="addFriend"></add-friend>
  </div>
</template>

<script>
import AddFriend from '@/views/ModelItem/AddFriend'
export default {
  data () {
    return {
    }
  },
  methods: {
    add (item) {
      this.$refs.addFriend.addFlag = true
    }
  },
  computed: {
    avatar () {
      return {
        width: '44px',
        height: '44px',
        borderRadius: '22px',
        cursor: 'pointer'
      }
    }
  },
  components: {
    AddFriend
  }
}
</script>

<style lang="scss" scoped>
.firefly-chat-body{
  flex: 1;
  padding: 8px 10px 0;
  overflow: auto;
  &::-webkit-scrollbar{
    display: block;
    width: 6px;
    height: 6px;
  }
}
.firefly-msg-list{
  text-align: initial;
  display: flex;
  margin-right: 40px;
  margin-bottom: 10px;
  .avatar{
    min-width: 44px;
  }
  .firefly-msg-right{
    margin-left: 12px;
  }
  .firefly-msg-top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span{
      margin-left: 8px;
    }
    .name{
      font-size: 12px;
      color: #333;
    }
    .time{
      font-size: 12px;
      color: #666;
    }
  }
  .firefly-msg-content{
    color: #555;
    font-size: 14px;
    background-color: hsla(0,0%,100%,.8);
    padding: 6px 8px;
    border-radius: 8px;
    border-top-left-radius: 0;
    min-height: 28px;
    margin-top: 3px;
    position: relative;
    z-index: 1;
    &:after{
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: -7px;
      border-style: solid;
      border-width: 0 7px 15px 0;
      border-color: transparent hsla(0,0%,100%,.8) transparent transparent;
    }
  }
  &.self{
    flex-direction: row-reverse;
    margin-right: 0;
    margin-left: 40px;
    .firefly-msg-content{
      border-top-left-radius: 10px;
      border-top-right-radius: 0;
    }
    .firefly-msg-right{
      margin-right: 12px;
    }
    .firefly-msg-top{
      // justify-content: flex-end;
      flex-direction: row-reverse;
    }
    .firefly-msg-content{
      background-color: rgb(6, 147, 227);
      color: #fff;
      &:after{
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        right: -7px;
        left: auto;
        border-style: solid;
        border-width: 0 0 15px 7px;
        border-color: transparent transparent transparent rgb(6, 147, 227);
      }
    }
  }
}
</style>
