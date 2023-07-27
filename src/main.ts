import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import MyButton from "@/components/UI/MyButton.vue";
import "@/assets/base.css";
import Focus from "@/directives/VFocus";

const savedState = localStorage.getItem("todoApp");
if (savedState) {
  store.replaceState(JSON.parse(savedState));
}

createApp(App)
  .use(store)
  .directive("focus", Focus)
  .component("MyButton", MyButton)
  .mount("#app");
