import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ErrorNotFoundVue from "@/pages/ErrorNotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    children: [
      {
        path: "/home/:isPersonal",
        name: "Home",
        component: () => Home,
      },
      {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: ErrorNotFoundVue,
      },
    ],
  },
];

export default routes;
