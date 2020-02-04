import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import initConfig from "@/utils/initConfig";
import "@/components";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
// 引入iconfont
import "./icon/iconfont/index.scss";

// 全局css
import "./styles/global.scss";

Vue.config.productionTip = false;
Vue.use(ViewUI);
initConfig();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
