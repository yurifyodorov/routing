import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
  {
    path: '/page4',
    name: 'Page4',
    component: () => import('../views/Page4.vue')
  },
  {
    path: '/page5',
    name: 'Page5',
    component: () => import('../views/Page5.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
