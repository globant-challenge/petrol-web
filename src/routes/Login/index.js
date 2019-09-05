import LOGIN_LAYOUT from './route';

export default {
  path: LOGIN_LAYOUT.route,
  getComponent(nextState, cb) {
    import('./LoginLayout')
      .then(layout => cb(null, layout.default));
  },
};
