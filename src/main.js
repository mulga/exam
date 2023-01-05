import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.css";

import ExamCardImage from "./components/ExamCardImage.vue";
import ExamFilterButton from "./components/ExamFilterButton.vue";
import ExamFilterContainer from "./components/ExamFilterContainer.vue";

const app = createApp(App);
app.use(App);
app.use(router);
app.use(store);

app.component("exam-card-image", ExamCardImage);
app.component("exam-filter-button", ExamFilterButton);
app.component("exam-filter-container", ExamFilterContainer);

app.mount("#app");

// createApp(App).use(store).use(router).mount("#app");
