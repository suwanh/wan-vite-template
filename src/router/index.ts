import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import indexRouter from "./modules";

const routes = [...indexRouter];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
