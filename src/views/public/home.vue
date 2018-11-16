<template>
  <div>
    <Button type="primary"
            @click="logout()">
      {{ $t('homeSection.innerHtml.logoutBtn') }}
    </Button>
    <Button type="primary"
            @click="toExample()">
      {{ $t('homeSection.innerHtml.toExamplePage') }}
    </Button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { LOGOUT } from 'STORE/types';
import { ROUTER_PUBLIC, ROUTER_AUTH } from 'CONFIG';

export default {
  name: 'home',

  computed: mapState({
    userLogin: state => state.profile.userLogin,
  }),

  methods: {
    ...mapActions({
      LOGOUT,
    }),

    toExample() {
      this.$router.push({
        name: ROUTER_AUTH.EXAMPLE,
      });
    },

    async logout() {
      try {
        await this[LOGOUT]();
        if (!this.userLogin) {
          this.$Message.success({
            content: this.$t('homeSection.message.logoutSuccess'),
            duration: 3,
          });
          this.$router.push({
            name: ROUTER_PUBLIC.LOGIN,
          });
          return
        }
      } catch (e) {}
    },
  },
};
</script>

