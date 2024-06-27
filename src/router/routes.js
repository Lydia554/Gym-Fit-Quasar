// routes.js
const routes = [
  {
    path: "/",
    component: () => import("../components/MainHome.vue"),
  },
  {
    path: "/courses",
    component: () => import("../components/MainCourses.vue"),
  },
  {
    path: "/events",
    component: () => import("../components/MainEvents.vue"),
  },
  {
    path: "/pricing",
    component: () => import("../components/MainPricing.vue"),
  },
  {
    path: "/contact",
    component: () => import("../components/MainContact.vue"),
  },
  {
    path: "/about",
    component: () => import("../components/MainAbout.vue"),
  },
  {
    path: "/login",
    component: () => import("../components/MainLogin.vue"),
  },
  {
    path: "/signup",
    component: () => import("../components/MainSignup.vue"),
  },
];
export default routes;
