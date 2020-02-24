import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/common/Home.vue';
import LayoutHome from '../views/theme/classic/LayoutHome.vue';
Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LayoutHome',
      component: LayoutHome,
    },
  ],
});
