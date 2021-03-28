import { createApp } from 'vue';
import { Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
 const ant = createApp();
ant.config.productionTip = false;

/* Automatically register components under Button, such as Button.Group */
ant.use(Button);

ant.config.globalProperties.$message = message;
export default  ant;
