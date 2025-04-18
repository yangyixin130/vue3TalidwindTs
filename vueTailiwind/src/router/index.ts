// 路由配置

import { createRouter, createWebHistory } from "vue-router";

import routes from "~pages";
console.log(routes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 在这里添加路由的导航守卫
router.beforeEach((to: any, from: any, next: any) => {
  console.log("Navigating to:", to.path);
  next();
});

export default router;
