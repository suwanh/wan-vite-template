import { createApp } from "vue";
import "@/style/index.css"; // 全局样式
import App from "@/App.vue";
import { router, setupRouter } from "@/router/index.ts";
import { setupRouterGuard } from "@/router/guard.ts";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "virtual:uno.css";

// 创建实例
function bootstrap() {
  const app = createApp(App);

  // 路由
  setupRouter(app);

  // 路由守卫
  setupRouterGuard(router);

  // 引入组件库
  app.use(ElementPlus);
  app.mount("#app");
}

bootstrap();
