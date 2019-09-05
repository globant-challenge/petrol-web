import FAQ_LAYOUT from './route';

export default {
  path: FAQ_LAYOUT.route,
  getComponent(nextState, cb) {
    import('./FaqLayout')
      .then(layout => cb(null, layout.default));
  },
};
