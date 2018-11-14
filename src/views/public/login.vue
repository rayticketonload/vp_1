<template>
  <div class="login-box">
    <Form ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          inline>
      <FormItem prop="account">
        <Input type="text"
               v-model="formInline.account"
               :placeholder="$t('loginSection.placeholder.account')">
        <Icon type="ios-person-outline"
              slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="verifyCode">
        <Input type="text"
               v-model="formInline.verifyCode"
               :placeholder="$t('loginSection.placeholder.verifyCode')">
        <Icon type="ios-lock-outline"
              slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary"
                @click="handleSubmit('formInline')">
          {{$t('loginSection.innerHtml.loginButton')}}
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { LOGIN } from 'STORE/types';

export default {
  name: 'login',

  data() {
    return {
      formInline: {
        account: '',
        verifyCode: '',
      },
      ruleInline: {
        account: [
          {
            required: true,
            message: this.$t('loginSection.verifyMsg.account.require'),
            trigger: 'blur',
          },
        ],
        verifyCode: [
          {
            required: true,
            message: this.$t('loginSection.verifyMsg.verifyCode.require'),
            trigger: 'blur',
          },
          {
            type: 'string',
            min: 4,
            message: this.$t('loginSection.verifyMsg.verifyCode.pattern'),
            trigger: 'blur',
          },
        ],
      },
    };
  },

  computed: mapState({
    userLogin: state => state.profile.userLogin,
  }),

  methods: {
    ...mapActions({
      LOGIN,
    }),

    async handleSubmit(name) {
      let pass = false;
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success(this.$t('loginSection.result.success'));
          pass = true;
        } else {
          this.$Message.error(this.$t('loginSection.result.fail'));
          return;
        }
      });

      if (pass) {
        const loginParams = {
          phone: this.formInline.account,
          verifyCode: this.formInline.verifyCode,
        };
        try {
          await this[LOGIN](loginParams);
          if (this.userLogin) {
            const redirect = decodeURIComponent(
              this.$route.query.redirect || '/',
            );
            this.$router.push({
              path: redirect,
            });
          }
        } catch (e) {
          this.$Message.error(e.errMsg);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
