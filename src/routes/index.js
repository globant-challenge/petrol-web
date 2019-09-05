import DASHBOARD_ROUTE from './Dashboard/route';
import dashboard from './Dashboard';
import faq from './Faq';
import login from './Login';
import Layout from './Layout';

export default {
  path: '/',
  component: Layout,
  indexRoute: { onEnter: (nextState, replace) => replace(`/${DASHBOARD_ROUTE.route}`) },
  childRoutes: [
    dashboard,
    faq,
    login,
  ],
};
