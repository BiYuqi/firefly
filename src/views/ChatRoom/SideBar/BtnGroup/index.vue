<template>
  <div class="firfly-btn-group">
    <el-tooltip
      v-for="(item, index) in config"
      @click.native="jump(item.name)"
      :key="index"
      class="item"
      effect="dark"
      :content="item.content"
      placement="right">
      <svg-icon
        color="rgba(247, 247, 247, 0.7)"
        size="30"
        :name="item.name">
      </svg-icon>
    </el-tooltip>
    <about-me ref="aboutme"></about-me>
    <donation-me ref="donation"></donation-me>
    <set-me ref="set"></set-me>
  </div>
</template>

<script>
import { openPage } from '@/utils/tools'
import AboutMe from '@/views/ModelItem/AboutMe'
import DonationMe from '@/views/ModelItem/DonationMe'
import SetMe from '@/views/ModelItem/SetInfo'
export default {
  data () {
    return {
      config: [
        { content: '源码', name: 'github' },
        { content: '关于', name: 'about' },
        { content: '打赏', name: 'money' },
        { content: '设置', name: 'set' },
        { content: '退出登录', name: 'shut' }
      ]
    }
  },
  methods: {
    jump (name) {
      switch (name) {
        case 'github':
          const URL = 'https://github.com/BiYuqi/firefly'
          openPage(URL)
          break
        case 'about':
          this.$refs.aboutme.aboutFlag = true
          break
        case 'money':
          this.$refs.donation.donationFlag = true
          break
        case 'set':
          this.$refs.set.setFlag = true
          break
        default:
          break
      }
    }
  },
  components: {
    AboutMe,
    DonationMe,
    SetMe
  }
}
</script>

<style lang="scss" scoped>
.firfly-btn-group{
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  .item{
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>