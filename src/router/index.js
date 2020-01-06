import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Menu1 from "../views/Menu1.vue";
import Menu2 from "../views/Menu2.vue";
import store from "../store";

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
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        redirect: "menu1"
      },
      {
        path: "menu1",
        name: "menu1",
        component: Menu1
      },
      {
        path: "menu2",
        name: "menu2",
        component: Menu2
      }
    ],
    meta: {
      requiresAuth: true
    }
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 授权验证
    if (store.state.authorization) {
      if (!store.state.username) {
        // 刷新页面重新获取用户信息
        await store.dispatch("getUserInfo");
      }
      if (!store.state.authRoutes.find(item => item.path === to.fullPath)) {
        return next({
          path: "/login",
          query: { redirect: to.fullPath }
        });
      }
    } else {
      return next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }
  }
  next();
});

export default router;
