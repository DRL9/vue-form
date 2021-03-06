import Vue from "vue";
import Vuex from "vuex";
import * as nets from "../nets";
import * as auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorization: auth.getAuth(),
    username: "",
    authRoutes: []
  },
  getters: {
    menus(state) {
      return state.authRoutes.filter(item => item.isMenu);
    }
  },
  mutations: {
    mutateUserInfo(state, payload) {
      Object.assign(state, payload);
      auth.setAuth(payload.authorization);
    }
  },
  actions: {
    async login({ commit }, formData) {
      let result = await nets.login(formData);
      if (result.success) {
        commit("mutateUserInfo", result.data);
      }
      return result;
    },
    async getUserInfo({ commit }) {
      let result = await nets.getUserInfo();
      if (result.success) {
        commit("mutateUserInfo", result.data);
      }
    }
  },
  modules: {}
});
