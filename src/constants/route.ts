import {Route} from '../helpers/Route';

export const route = {
  main: Route.of({path: '/'}),
  features: Route.of({path: '/features/:id'}),
  blog: Route.of({path: '/blog'}),
  shop: Route.of({path: '/shop'}),
  about: Route.of({path: '/about'}),
  contact: Route.of({path: '/contact'}),
};
