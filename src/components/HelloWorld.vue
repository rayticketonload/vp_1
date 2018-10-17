<template>
  <div>
    <RadioGroup v-model="theme"
                type="button"
                :on-change="themeChange()">
      <Radio label="black">黑色</Radio>
      <Radio label="blue">蓝色</Radio>
      <Radio label="red">红色</Radio>
    </RadioGroup>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Button, RadioGroup, Radio } from 'iview';
import store from '_STORE';
import { SET_THEME } from '_STORE/types';

export default {
  name: 'HelloWorld',

  components: {
    Button,
    Radio,
    RadioGroup,
  },

  data() {
    return {
      theme: 'black',
    };
  },

  methods: {
    themeChange() {
      store.commit(SET_THEME, this.theme);
    },
  },
};
</script>
