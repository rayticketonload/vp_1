<template>
  <div>
    <div style="padding-top: 30px;">
      <DatePicker type="date"
                  :placeholder="$t('exampleSectionLang.test')">
      </DatePicker>
    </div>
    <div style="padding-top: 30px;">
      <Select v-model="model1">
        <Option v-for="item in cityList"
                :value="item.value"
                :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div style="padding-top: 30px;">
      <Button type="primary"
              @click="toHome()">
        {{ $t('exampleSectionLang.toHome') }}
      </Button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ROUTES_CONST } from 'CONFIG';

export default {
  name: 'exampleSection',

  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      model1: '',
    };
  },

  computed: {
    ...mapState({
      currentSectionLangPack: state => state.component.currentSectionLangPack, // 当前语言包
    }),
  },

  methods: {
    toHome() {
      this.$router.push({
        name: ROUTES_CONST.AUTH.HOME,
      });
    },
  },
};
</script>
