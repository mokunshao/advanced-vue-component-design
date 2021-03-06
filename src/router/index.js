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
  {
    path: '/ep3',
    name: 'ep3',
    component: () => import('../views/ep3.vue'),
  },
  {
    path: '/ep4',
    name: 'ep4',
    component: () => import('../views/ep4.vue'),
  },
  {
    path: '/ep5',
    name: 'ep5',
    component: () => import('../views/ep5.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
