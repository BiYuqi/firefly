<template>
  <svg class="icon" 
    :class="iconClass"
    :style="{
      fontSize: size + 'px',
      backgroundColor: bgColor,
      color: color}">
    <use :xlink:href="'#'+Icons[name].default.id"></use>
  </svg>
</template>

<script>
import Icons from '@/icons'
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 12
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      Icons: Icons,
      iconClass: 'icon-' + this.name
    }
  }
}
</script>
<style>
  .icon{
    width: 1em;
    height: 1em;
    vertical-align: sub;
    fill: currentColor;
    overflow: hidden;
  }
</style>
