<template>
  <div>
    <RadioGroup v-model="currentLang"
                size="small"
                type="button"
                @on-change="langChange(currentLang)">
      <Radio v-for="(item, index) in languages"
             :key="index"
             :label="item.key">{{ item.name }}</Radio>
    </RadioGroup>
  </div>
</template>

<script>
import { savels } from 'UTILS/storageControl'; // localstorage 操作

export default {
  name: 'languageChange',

  data() {
    return {
      // 语种列表
      languages: this.$config.languages,
      // 当前所用语种
      currentLang: null,
    };
  },

  methods: {
    // 改变语种
    langChange(currentLang) {
      // 赋值当前选择的 currentLang 到全局的 locale 语种
      this.$i18n.locale = currentLang;
      // 并保存到 localstorage
      savels(this.$config.storageLangKeyName, this.$i18n.locale);
    },
  },

  mounted() {
    // 从全局的 locale 设置表里面拿到当前使用的语种
    this.currentLang = this.$i18n.locale;
  },
};
</script>
