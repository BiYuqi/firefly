<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html, body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'local-file', Arial, Verdana,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
    display: none;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2)
}
::-webkit-scrollbar-track {
    background: hsla(0,0%,100%,.1)
}
</style>
