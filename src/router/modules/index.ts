import type { RouteRecordRaw } from "vue-router";

const indexRouter: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Website",
    component: () => import("@/views/system/Login.vue"),
    meta: {},
  },
];
export default indexRouter;
