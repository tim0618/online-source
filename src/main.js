import { createApp } from "vue";
import { Quasar, Dialog } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
// import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// import router
import Login from "./page/Login.vue";
import Index from "./page/Index.vue";
import LearData from "./page/LearnData.vue";
import TrafficData from "./page/TrafficData.vue";
import ManageData from "./page/ManageData.vue";

const routes = [
  {
    path: "/",
    component: Login,
    meta: { hideLayout: true },
  },
  {
    path: "/Index",
    component: Index,
  },
  {
    path: "/LearnData",
    component: LearData,
  },
  {
    path: "/TrafficData",
    component: TrafficData,
  },
  {
    path: "/ManageData",
    component: ManageData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const myApp = createApp(App).use(router).use(Quasar, {
  plugins: { Dialog },
});

myApp.mount("#app");
