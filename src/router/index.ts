import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      components: {
        TheHeader,
        TheFooter,
        default: import("@/pages/Home.vue"),
      },
    },
  ],
});

export default router;
