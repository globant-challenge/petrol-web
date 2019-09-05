import DASHBOARD_LAYOUT from './route';

export default {
  path: DASHBOARD_LAYOUT.route,
  getComponent(nextState, cb) {
    import('./DashboardLayout')
      .then(layout => cb(null, layout.default));
  },
};
