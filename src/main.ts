import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/styles/main.scss";
import { router } from "./router/index";
import GoogleSignInPlugin from "vue3-google-signin";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(GoogleSignInPlugin, {
  clientId:
    "460449556653-slqoqpn6ajrvsoghk12u8obbi5hoijdc.apps.googleusercontent.com",
});
app.mount("#app");
