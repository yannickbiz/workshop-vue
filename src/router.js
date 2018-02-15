import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Sandbox from './views/Sandbox.vue';
import Users from './views/Users.vue';
import Todos from './views/Todos.vue';

Vue.use(Router);

export default new Router({
    // remove the # in url
    // @ref https://router.vuejs.org/en/essentials/history-mode.html
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/sandbox',
            name: 'sandbox',
            component: Sandbox,
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/todos',
            name: 'todos',
            component: Todos,
        },
    ],
});
