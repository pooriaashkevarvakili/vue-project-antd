import { createApp } from 'vue';
import { Button, message } from 'ant-design-vue';
import router from "./router/index"
import store from "./store/index"
const app = createApp();
app.config.productionTip = false;

/* Automatically register components under Button, such as Button.Group */
app.use(Button);
app.use(router)
app.use(store)


app.config.globalProperties.$message = message;
