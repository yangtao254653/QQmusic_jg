import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./css/reset.css";
<<<<<<< HEAD
import "@/assets/home_icon/icon/iconfont.css";
=======
import "@/assets/icon/iconfont.css";
import "@/iconfont/icon/iconfont.css"
>>>>>>> ca9f858ed8ef46a99ae6d9d0b445e6e0f5a43797

Vue.config.productionTip = false;
Vue.use(ElementUi);


if(process.env.NODE_ENV==='development'){
  require("./mock/mock.js")
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
