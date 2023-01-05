import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StyleGuide from "../views/StyleGuide.vue";
import AddNew from "../views/AddNew.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/styleguide",
    name: "stylegudie",
    component: StyleGuide,
  },
  {
    path: "/addnew",
    name: "addnew",
    component: AddNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
