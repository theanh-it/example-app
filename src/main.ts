import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app.vue";
import router from "./router";
import { vuetify } from "./vuetify";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(vuetify).use(pinia);

app.mount("#app");
