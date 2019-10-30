import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ep1',
    name: 'ep1',
    component: () => import('../views/ep1.vue'),
  },
  {
    path: '/ep2',
    name: 'ep2',
    component: () => import('../views/ep2.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
