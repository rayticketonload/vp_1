<template>
  <div class="center">
    <div>
      <languageChange />
    </div>
    <div style="margin-top: 30px; background-color: #262f3b; border-radius: 3px; padding: 10px;">
      <themeChange />
    </div>
    <div>
      <exampleSection />
    </div>
  </div>
</template>

<script>
import languageChange from '_COMPONENTS/section/languageChange.vue';
import themeChange from '_COMPONENTS/section/themeChange.vue';
import exampleSection from '_COMPONENTS/section/exampleSection.vue';

export default {
  name: 'home',
  components: {
    languageChange,
    themeChange,
    exampleSection,
  },
};
</script>

<style lang="less" scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

