import Vue from "vue";
import ElementUi from "element-ui";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
