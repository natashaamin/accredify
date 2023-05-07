import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const install = (app: any) => {
  app.use(router);
};

export default router;