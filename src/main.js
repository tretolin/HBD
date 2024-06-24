import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import lazyload from './directives/lazy-load';

const app = createApp(App)
app.directive('lazyload', lazyload);
app.mount("#app");