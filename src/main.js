//程式邏輯很簡單，它會先引用 App.vue ，而 App.vue 就是一開始建立專案時，會自動產生好的頁面。經過 import 之後，呼叫 createApp，並且渲染(mount) 到 #app 之上，#app 可以把它當成一個變數。
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
