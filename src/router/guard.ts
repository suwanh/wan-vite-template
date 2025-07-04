// 路由守卫
import type { Router } from "vue-router";

export function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log("beforeEach", to, from);
    next();
  });
}
