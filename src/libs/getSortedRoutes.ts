import routes from '~react-pages';
import { RouteObject } from 'react-router';

export const getSortedRoutes = (): RouteObject[] => {
  const homeIndex = routes.findIndex((route) => route.path === '/'); // get Home index in array
  [routes[0], routes[homeIndex]] = [routes[homeIndex], routes[0]];

  return routes;
};
