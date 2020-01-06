import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },

  {
    path: "/todo",
    name: "todo",
    component: Todo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 授权验证
    // if (!auth.loggedIn()) {
    //   return next({
    //     path: "/login",
    //     query: { redirect: to.fullPath }
    //   });
    // }
  }
  next();
});

export default router;
