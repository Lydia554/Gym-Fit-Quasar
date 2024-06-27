import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import VueScrollTo from "vue-scrollto";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  if (from.path === "/signup" && to.path === "/login") {
    setTimeout(() => {
      const scrollToId = to.meta.scrollToId || "app";
      VueScrollTo.scrollTo(`#${scrollToId}`, 200);
    }, 1000); // delay of 1000 milliseconds
  }
});

export default function () {
  return router;
}
