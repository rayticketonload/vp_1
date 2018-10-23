import NProgress from 'nprogress';
import store from '@store';
import { GET_PROFILE } from '@store/types';

import { FUNDER_PUBLIC_PAGE, SYSTEM_NAME, ASIDE_LEFT_MAP_BACKEND } from '@helper/const';

export default {
  use(router) {
    router.beforeEach(filter);
    router.afterEach(() => {
      NProgress.done();
    });
  },
};

const getResKeyByName = (name) => {
  let key = null;
  for (const item in ASIDE_LEFT_MAP_BACKEND) {
    ASIDE_LEFT_MAP_BACKEND[item].some((i) => {
      if (i === name) {
        key = item;
        return true;
      }
    });
  }
  return key;
};

const canVisit = (name) => {
  const resKey = getResKeyByName(name);
  if (!resKey) return false;
  return store.state.profile.canAccessed.some((key) => {
    if (key === resKey) return true;
  });
};

const defaultVisit = (name) => {
  switch (name) {
    case FUNDER_PUBLIC_PAGE.SYSTEM_HOME:
    case FUNDER_PUBLIC_PAGE.NOT_FOUND:
    case FUNDER_PUBLIC_PAGE.ACTIVATION:
    case FUNDER_PUBLIC_PAGE.INVITE_LOGIN:
      return true;
  }
  return false;
};

const activationVisit = (name) => {
  switch (name) {
    case FUNDER_PUBLIC_PAGE.ACTIVATION:
    case FUNDER_PUBLIC_PAGE.INVITE_LOGIN:
      return true;
  }
  return false;
};

const filter = async (to, from, next) => {
  document.title = SYSTEM_NAME;
  NProgress.start();
  //
  if (!store.state.profile.hasLogin) {
    if (activationVisit(to.name)) {
      NProgress.done();
      next();
      return;
    } else if (to.name === FUNDER_PUBLIC_PAGE.LOGIN) {
      NProgress.done();
      next();
      return;
    }
    await store.dispatch(GET_PROFILE);
    NProgress.done();
    next();
  }

  if (store.state.profile.hasLogin) {
    NProgress.done();
    if (to.name === FUNDER_PUBLIC_PAGE.LOGIN) {
      next({
        name: FUNDER_PUBLIC_PAGE.SYSTEM_HOME,
      });
      return;
    }

    // 默认权限
    if (defaultVisit(to.name)) {
      NProgress.done();
      next();
      return;
    } else if (!canVisit(to.name)) {
      NProgress.done();
      // 没权限
      next({
        name: FUNDER_PUBLIC_PAGE.SYSTEM_HOME,
      });
      return;
    }
    NProgress.done();
    next();
  }
};
