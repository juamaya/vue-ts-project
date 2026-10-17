import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("../views/HomeView.vue") },
    {
      path: "/servicios",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/proyectos",
      component: () => import("../views/ProjectsView.vue"),
    },
    { path: "/nosotros", component: () => import("../views/AboutView.vue") },
    { path: "/contacto", component: () => import("../views/ContactView.vue") },
  ],
  // Volver al inicio al cambiar de página
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
