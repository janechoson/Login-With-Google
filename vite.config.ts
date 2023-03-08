import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import SVGLoader from "vite-svg-loader";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    //Set Port local :3000
    server: {
      port: +env.VITE_PORT,
    },
    //Build Options thích hợp trình duyệt
    build: {
      target: "esnext",
    },
    //import file đường dẫn tương đối @/file
    resolve: {
      alias: {
        "@/": `${resolve(__dirname, "src")}/`,
      },
    },
    //import các plugins sử dụng trong project
    plugins: [
      vue(),
      SVGLoader({
        svgo: false,
      }),
      Pages({
        dirs: "src/pages",
        exclude: ["**/components/*.vue"],
        extensions: ["vue"],
        syncIndex: true,
      }),
      Layouts({
        layoutsDirs: "src/layouts",
        defaultLayout: "system-layout",
        exclude: ["**/components/**/*.vue"],
      }),
      // your plugin installation
      Components({
        resolvers: [
          AntDesignVueResolver(),
          IconsResolver({
            enabledCollections: ["ep"],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      VitePluginFonts({
        google: {
          families: ["Source Sans Pro"],
        },
      }),
    ],
  };
});
