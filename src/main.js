import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";
import "./style/tailwind.css"
import store from "./store"
import router from "./router/index"
createApp(App).use(store).use(router).use(Button).mount("#app");
