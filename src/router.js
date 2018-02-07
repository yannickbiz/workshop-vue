import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TwoWayDataBinding from './views/TwoWayDataBinding.vue';
import Users from './views/Users.vue';

Vue.use(Router);

export default new Router({
  // History mode
  // @ref https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mvvm',
      name: 'model-view-view-model',
      component: TwoWayDataBinding,
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users,
    },
  ],
});
