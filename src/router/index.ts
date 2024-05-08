import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SortView from '@/views/optionsViews/SortView.vue';
import SearchView from '@/views/optionsViews/SearchView.vue';
import TreeView from '@/views/optionsViews/TreeView.vue';
import GraphView from '@/views/optionsViews/GraphView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/sort',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/sort',
          name: 'sorting',
          component: SortView,
        },
        {
          path: '/search',
          name: 'searching',
          component: SearchView,
        },
        {
          path: '/trees',
          name: 'trees',
          component: TreeView,
        },
        {
          path: 'graphs',
          name: 'graphs',
          component: GraphView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: '/sort',
    },
  ],
});

export default router;
