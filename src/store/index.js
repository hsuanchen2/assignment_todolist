import { createStore } from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";
const store = createStore({
  state() {
    return {
      todoListItems: [],
    };
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
});

export default store;
