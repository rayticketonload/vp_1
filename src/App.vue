<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { locale, page } from 'iview';
import eventbus from '_UTILS/eventbus';

export default {
  name: 'app',

  components: {
    page,
  },

  computed: {
    ...mapState({
      currentUILangPack: state => state.component.currentUILangPack, // 当前 UI 组件语言包
    }),
  },

  data() {
    return {
      uiLangPack: null,
    };
  },

  methods: {
    async init() {
      console.log('currentUILangPack', this.currentUILangPack.i.locale);
      await locale(this.currentUILangPack);
    },
  },

  created() {
    this.init();
    eventbus.$on('resetUILang', this.init);
  },
};
</script>


<style lang="less">
@import '~@/style/customStyle/mixins/mixin';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
