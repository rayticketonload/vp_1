<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import store from '_STORE';
let customStyle = '';
switch (store.state.component.theme) {
  case 'black':
    customStyle = './style/black.less';
    break;
  case 'blue':
    customStyle = './style/blue.less';
    break;
  case 'red':
    customStyle = './style/red.less';
    break;
}
console.log(customStyle);
// import `./style/${customStyle}.less`;
// import './style/black.less';
// import './style/blue.less';
// import './style/red.less';

export default {
  name: 'app',
};
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
