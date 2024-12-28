import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Auto from "./components/AUTO";
const app = createApp(App);
app.use(Auto);
app.mount("#app");
