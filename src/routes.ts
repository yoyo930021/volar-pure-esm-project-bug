import HomePage from './views/home.vue';
import NotFoundPage from './views/404.vue'
import LoginView from './views/LoginView.vue'
import { Router } from 'framework7/types'

type Routes = Router.RouteParameters[]

var routes: Routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    loginScreen: {
      component: LoginView,
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
