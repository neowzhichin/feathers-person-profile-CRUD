const uploadRes = require('./upload-res');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('', uploadRes());
};
