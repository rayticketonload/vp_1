<template>
  <div :class="['themes', themeSwitch ? 'show-theme' : '']"
       style="margin: 0 auto;"
       v-clickoutside="themeSwitchOff">
    <div class="theme-switch"
         v-on:click.stop="themeSwitchClick">
      <img :src="themIconUrl"
           alt="主题切换按钮"
           class="theme-switch-img">
    </div>
    <ul class="theme-options">
      <li v-for="(item, index) in themes"
          :class="['theme-option', `${item.themeKey}`]"
          v-on:click.stop="themeOptionClick(item.themeKey)"
          :key="index">
      </li>
    </ul>
  </div>
</template>

<script>
import { saveStorage } from '@UTILS/localStorageControl'; // localstorage 操作

export default {
  name: 'themeChange',

  data() {
    return {
      // 主题列表
      themes: this.$config.themes,
      // 主题开关状态
      themeSwitch: false,
      // 主题图标地址
      themIconUrl:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQwNDU5ODA1MzA2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDExOTEgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkwMDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQ4Ljg3NSIgaGVpZ2h0PSIxMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTExODcuMzAwOTQ4IDI3NC4zMDY5NDhsLTQ5Ljc2ODE0NCAyNzEuNTgxOTYyYTQ5LjIyMzE0NyA0OS4yMjMxNDcgMCAwIDEtMzAuNzE4MDE4IDI5LjcyNzExNWMtMS4xODkwODUgMC40NDU5MDctMi4zMDM4NTEgMC45NDEzNTktMy41NDI0ODEgMS4yNjM0MDJhNDguODAyMDEzIDQ4LjgwMjAxMyAwIDAgMS0xMy42MDAxNTUgMS4zMzc3MmMtMS45MzIyNjItMC4wMjQ3NzMtMy43NjU0MzQgMC01LjY5NzY5Ny0wLjI3MjQ5OGE0OS44NjcyMzQgNDkuODY3MjM0IDAgMCAxLTkuOTgzMzU2LTIuNDc3MjZjLTAuNzY3OTUtMC4yOTcyNzEtMS40MzY4MTEtMC43NDMxNzgtMi4xNzk5ODgtMS4wNjUyMjEtMS40ODYzNTYtMC41OTQ1NDItMy4wNDcwMjktMC41Njk3Ny00LjUwODYxMi0xLjMxMjk0OGwtMTE3LjY0NTA1Ni0zMC40NzAyOTIgNDMuODIyNzIyIDQyNi43ODIyNzJhNDkuMzk2NTU1IDQ5LjM5NjU1NSAwIDAgMS0zMC4xNDgyNDkgNDkuNTY5OTYzIDQwLjYyNzA1NiA0MC42MjcwNTYgMCAwIDEtNi4yNDI2OTQgMi4zMDM4NTIgNDkuMjQ3OTE5IDQ5LjI0NzkxOSAwIDAgMS0xNC42MTU4MzEgMi40NTI0ODZsLTUxOS40MDcwMDYtMC40NzA2NzlhNDkuNTQ1MTkxIDQ5LjU0NTE5MSAwIDAgMSAwLTk5LjA5MDM4MWw0NjYuMzY4ODc5IDAuNDIxMTM0LTQzLjAwNTIyNS00MzIuMzgwODc5YTQ5LjE3MzYwMiA0OS4xNzM2MDIgMCAwIDEgMzEuNDg1OTY4LTYwLjkxNTgxMmwwLjY2ODg2LTAuMjcyNDk4YTQ3LjA0MzE1OSA0Ny4wNDMxNTkgMCAwIDEgNDAuMDgyMDYgMy42MTY3OTlsMTMzLjYyMzM3OSAzNS42OTczMSAzNy41MzA0ODItMTk4LjUyNzU3OWMtNzYuODQ0NTkxLTcyLjQzNTA2OS0xNjAuNDc2ODcyLTEyMC45MTUwMzgtMjU4Ljc3NDUzMS0xNjAuMzc3NzgyLTMyLjc0OTM3MSA5OC4wNzQ3MDUtMTI1LjE1MTE1MiAxNjguODc0NzgyLTIzNC4yNDk2NjEgMTY4Ljg3NDc4Mi0xMDkuNDk0ODcxIDAtMjAyLjE5MzkyMy03MS4yNzA3NTctMjM0LjYyMTI1LTE2OS45MTUyMzEtOTkuNDM3MTk4IDM5LjY2MDkyNS0xODMuODYyMjAyIDg4LjM2Mzg0Ny0yNjEuNDAwNDI2IDE2MS40MTgyMzFsMzcuNjA0Nzk5IDE5OC45MjM5NCAxMzUuMTA5NzM1LTM2LjA5MzY3MWE0Ny4wNDMxNTkgNDcuMDQzMTU5IDAgMCAxIDQwLjA4MjA2LTMuNjE2Nzk5bDAuNjQ0MDg3IDAuMjcyNDk4YzIuNDI3NzE0IDAuODkxODEzIDQuODMwNjU2IDEuODMzMTcyIDcuMDYwMTkgMy4wNzE4MDJhNDkuMTI0MDU3IDQ5LjEyNDA1NyAwIDAgMSAyNC41MjQ4NjkgNTcuNTcxNTEybC00Ni44MjAyMDUgNDg1Ljc2NTgyMWE0OS41Njk5NjMgNDkuNTY5OTYzIDAgMCAxLTk4Ljc0MzU2NS04LjI5ODgxOWw0Mi40ODUwMDEtNDI2Ljg1NjU5LTExNy44NjgwMDkgMzAuNTQ0NjFhNTAuMjg4MzY4IDUwLjI4ODM2OCAwIDAgMS0yMi44ODk4NzggNS4wNzgzODIgNDkuMzQ3MDEgNDkuMzQ3MDEgMCAwIDEtNDguODc2MzMtMzIuMjc4NjkyTDMuMjk0NzU1IDI3NC4zMDY5NDhjLTguNjQ1NjM2LTIzLjczMjE0NiAwLjg5MTgxMy00OS4xNzM2MDIgMjIuNjQyMTUyLTYwLjM0NjA0MkE5OTAuMzgzNTg4IDk5MC4zODM1ODggMCAwIDEgMzQ4Ljc5ODE0MiAxNC41NjYyODZsMjguOTgzOTM3LTkuOTMzODExLTAuMjQ3NzI2IDAuNTQ0OTk3YzEuNzM0MDgyLTAuNzE4NDA1IDMuNDE4NjE4LTEuNTM1OTAxIDUuMzAxMzM1LTIuMDgwODk4bDQuNTU4MTU4LTAuNzkyNzIzYTQ5LjM3MTc4MiA0OS4zNzE3ODIgMCAwIDEgNTkuNDU0MjI4IDMwLjE5Nzc5NGgxLjk4MTgwOGMwIDAuMjIyOTUzLTAuMDc0MzE4IDAuNDIxMTM0LTAuMDc0MzE4IDAuNjQ0MDg4IDAgNC4xNjE3OTYgMC44OTE4MTMgOC4wNTEwOTMgMS4yMzg2MyAxMi4xMzg1NzEgMC4wNDk1NDUgMC42NDQwODcgMC4xNDg2MzYgMS4yODgxNzUgMC4xNzM0MDggMS45MzIyNjMgNy4yMDg4MjUgNzUuMDExNDE5IDY5LjY2MDUzOCAxMzMuODcxMTA1IDE0Ni41NTQ2NzQgMTMzLjg3MTEwNWExNDcuOTQxOTM5IDE0Ny45NDE5MzkgMCAwIDAgMTQ3Ljk0MTkzOS0xNDcuOTQxOTM5bC0wLjA0OTU0NS0wLjY0NDA4OGgzLjY2NjM0NGE0OS4zMjIyMzcgNDkuMzIyMjM3IDAgMCAxIDMyLjQ1MjEtMjkuNDA1MDcxTDc4NS4yOTEyNzIgMi4zMDM4NTFhNDkuMTczNjAyIDQ5LjE3MzYwMiAwIDAgMSA0MC4wMDc3NDEgNi4xNDM2MDRsMTcuNjEzMzE1IDYuMTY4Mzc2YTEuNDYxNTgzIDEuNDYxNTgzIDAgMCAxIDAuMDQ5NTQ1IDAuMzIyMDQ0IDk5MC43MDU2MzIgOTkwLjcwNTYzMiAwIDAgMSAzMjEuNzIxNjk2IDE5OS4wMjMwMzFjMjEuNzI1NTY2IDExLjE3MjQ0IDMxLjI4Nzc4OCAzNi42MTM4OTYgMjIuNjE3Mzc5IDYwLjM0NjA0MnoiIHAtaWQ9IjkwMDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=',
    };
  },

  methods: {
    themeSwitchClick() {
      this.themeSwitch = !this.themeSwitch;
    },

    themeSwitchOff() {
      this.themeSwitch = false;
    },

    themeOptionClick(themeKey) {
      document.getElementById('app').className = `${themeKey}`;
      saveStorage(this.$config.storageThemeKeyName, themeKey);
      this.themeSwitchOff();
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/customStyle/mixins/mixin';

// size
@size-theme-option: 32px;
// color
@color-theme-1: #4492d4;
@color-theme-2: #5dd396;
@color-theme-3: #f17c6b;

.themes {
  position: relative;
  .square(@size-theme-option);
  cursor: pointer;
  .border-box();

  * {
    .border-box();
  }

  &:hover {
    .theme-switch .theme-switch-img {
      .opacity(1);
    }
  }

  &.show-theme {
    .theme-switch .theme-switch-img {
      .opacity(1);
    }

    .theme-option {
      opacity: 1;

      &.t1 {
        transform: translate(-160%, -5%);
      }

      &.t2 {
        transform: translate(-50%, 60%);
      }

      &.t3 {
        transform: translate(60%, -5%);
      }
    }
  }
}

.theme-switch {
  .square(@size-theme-option);
  .rounded(50%);
  background-color: rgba(255, 255, 255, 0.2);
  line-height: @size-theme-option;
  text-align: center;
  position: relative;
  z-index: 2;

  &-img {
    .transition(all, 0.3s, ease, 0);
    .opacity(0.6);
    .size(70%, 70%);
    margin: -1px 0 0 0;
    display: inline-block;
    vertical-align: middle;
  }
}

.theme-options {
  padding: 0;
  margin: 0;
  list-style: none;
  .square(@size-theme-option);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.theme-option {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .rounded(50%);
  .square(@size-theme-option);
  .transition(all, 0.3s, ease, 0);
  background-color: rgb(226, 226, 226);
  border: 3px solid rgba(255, 255, 255, 1);
  opacity: 0;

  &:hover {
    .animation-s(shadow, 0.3s, ease, 0);
  }

  @keyframes shadow {
    0% {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    }
    100% {
      box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
    }
  }

  .theme-option-mixin(@color-theme) {
    background-color: @color-theme;

    &:hover {
      background-color: darken(@color-theme, 10);
    }
  }

  &.t1 {
    .theme-option-mixin(@color-theme-1);
  }

  &.t2 {
    .theme-option-mixin(@color-theme-2);
  }

  &.t3 {
    .theme-option-mixin(@color-theme-3);
  }
}
</style>

