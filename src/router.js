import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import TwoWayDataBinding from './views/TwoWayDataBinding.vue';
import Fetch from './views/Fetch.vue';

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
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/twdb',
            name: 'two-way-data-binding',
            component: TwoWayDataBinding,
        },
        {
            path: '/fetch',
            name: 'fetch',
            component: Fetch,
        },
    ],
});
