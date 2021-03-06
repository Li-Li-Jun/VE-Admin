import Vue from "vue";
import Router from "vue-router";
import router from "./router.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
Vue.use(Router);

const appRouter = new Router({
  mode: "history",
  routes: router
});

// eslint-disable-next-line
appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  let hasToken = localStorage.getItem('token') ? true : false;
  if (to.name === 'login' && hasToken) {
    next({name:'Home'})
  }
  if (to.name !== 'login' && !hasToken) {
    next({ name:'login'})
  }
  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
