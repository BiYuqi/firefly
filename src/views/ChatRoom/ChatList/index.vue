<template>
  <div class="firefly-linkman-group">
    <div class="firefly-chat-item"
      v-for="(item, index) in staticChatList"
      :key="index"
      :class="{focus: isFocus || currentGroup === item._id}"
      @click="chatNow(item)">
      <img :src="item.avatar">
      <div class="firefly-right">
        <div class="firefly-name-time">
          <p class="name">{{ item.name }}</p>
          <p class="time">12:09</p>
        </div>
        <div class="firefly-view-unread">
          <p class="preview">firefly: 的说法是否</p>
          <p class="unread">
            <span>9</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chatList } from '@/api/userInfo'
import Cookie from 'js-cookie'
export default {
  data () {
    return {
      staticChatList: [],
      currentGroup: ''
    }
  },
  methods: {
    async getChatList (id = '') {
      let group = await chatList({id: id})
      if (group) {
        this.staticChatList = group.data.data
        console.log(this.staticChatList)
      }
    },
    chatNow (item) {
      Cookie.set('c_g', item._id)
      this.currentGroup = item._id
      console.log(item)
    }
  },
  computed: {
    isFocus () {
      return this.staticChatList.length === 1
    }
  },
  created () {
    const ut = Cookie.get('ut')
    if (ut) {
      this.getChatList(this.$store.state.userId)
    } else {
      this.getChatList()
    }
  }
}
</script>

<style lang="scss" scoped>
.firefly-linkman-group{
  flex: 1;
  overflow-y: auto;
  .firefly-chat-item{
    display: flex;
    align-items: center;
    transition: background-color .24s;
    height: 90px;
    padding: 10px 16px;
    cursor: pointer;
    img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      min-width: 48px;
    }
    &.focus{
      background-color: rgba(6, 147, 227, 0.4);
    }
  }
  .firefly-right{
    // display: flex;
    width: 100%;
    margin-left: 14px;
  }
  .firefly-name-time,
  .firefly-view-unread{
    display: flex;
    justify-content: space-between;
  }
  .firefly-name-time{
    .name{
      color: rgb(247, 247, 247);
    }
    .time{
      color: rgba(247, 247, 247, 0.7);
      font-size: 12px;
    }
  }
  .firefly-view-unread{
    .preview{
      color: rgba(247, 247, 247, 0.7);
      font-size: 12px;
      width: 188px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    .unread{
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 50%;
      background-color: rgba(6, 147, 227, 1);
      span{
        color: rgba(247, 247, 247, 0.7);
        font-size: 12px;
      }
    }
  }
}
</style>