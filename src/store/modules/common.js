import { APP_CONFIG, NAV_LIST } from "@/store/types";

export default {
  namespaced: false,
  state: {
    config: null,
    nav: null
  },
  mutations: {
    [APP_CONFIG](state, config) {
      state.config = config;
    },
    [NAV_LIST](state, config) {
      state.nav = config;
    }
  },
  getters: {
    config: state => state.config,
    nav: state => state.nav
  }
};
