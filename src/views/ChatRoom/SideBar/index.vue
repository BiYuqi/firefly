<template>
  <div class="side-bar">
    <avatar-part></avatar-part>
    <btn-group></btn-group>
  </div>
</template>

<script>
import AvatarPart from './Avatar'
import BtnGroup from './BtnGroup'
export default {
  name: 'side-bar',
  data () {
    return {
    }
  },
  components: {
    AvatarPart,
    BtnGroup
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';
.side-bar{
  width: 80px;
  height: 100%;
  background-color: $bsColor;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
