<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { readls } from 'UTILS/storageControl';

export default {
  name: 'app',

  data() {
    return {
      currentTheme:
        readls(this.$config.storageThemeKeyName) ||
        this.$config.themes[0].themeKey,
    };
  },

  mounted() {
    document.getElementById('app').className = `${this.currentTheme}`;
  },
};
</script>


<style lang="less">
@import '~@/style/customStyle/mixins/mixin';
// 3套主题样式 (t1 就是默认样式)
@import '~@/style/customStyle/t2/t2';
@import '~@/style/customStyle/t3/t3';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
