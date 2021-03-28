import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";
import "./style/tailwind.css"
createApp(App).use(Button).mount("#app");
