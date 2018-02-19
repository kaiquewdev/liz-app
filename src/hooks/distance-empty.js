// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function distanceEmpty (hook,next) {
    next = next || function () {};
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    if (hook.data !== undefined && hook.data.distance === undefined) {
      delete hook.data.distance;
      delete hook.data.price;
      hook.data.warning = 'Distance must be defined.';
      next();
    }
    return Promise.resolve(hook);
  };
};
