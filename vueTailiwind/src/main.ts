import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
// 引入ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
createApp(App).use(Antd).use(router).use(pinia).mount("#app");
