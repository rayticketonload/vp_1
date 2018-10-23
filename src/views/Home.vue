<template>
  <div class="center">
    <div>
      <languageChange />
    </div>
    <div style="padding-top: 30px;">
      <exampleSection />
    </div>
  </div>
</template>

<script>
import languageChange from '_COMPONENTS/section/languageChange.vue';
import exampleSection from '_COMPONENTS/section/exampleSection.vue';

export default {
  name: 'home',
  components: {
    languageChange,
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

