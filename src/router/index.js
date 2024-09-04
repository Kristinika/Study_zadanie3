import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../views/Catalog.vue';
import Detail from '../views/Detail.vue'; 

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: route => ({ id: Number(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
