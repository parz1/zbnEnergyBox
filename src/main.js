import Vue from "vue";
import App from "./App";

let Fly = require("flyio/dist/npm/wx");
let fly = new Fly;
Vue.prototype.$fly = fly;

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
