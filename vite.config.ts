import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import type { UserConfig } from "vite";
import UnoCSS from "unocss/vite";

export default (): UserConfig => {
  return {
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 5555,
    },
  };
};
