import { boot } from "quasar/wrappers";
import "@mdi/font/css/materialdesignicons.css";
import VueScrollTo from "vue-scrollto";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  app.use(VueScrollTo);

  router.beforeEach((to, from, next) => {
    VueScrollTo.scrollTo("#q-app", 200);
    next();
  });
});
