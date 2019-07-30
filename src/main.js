import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ECharts from "vue-echarts";

import "./registerServiceWorker";

// materializeCss
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

import "echarts-gl";

// register component to use
Vue.component("v-chart", ECharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
