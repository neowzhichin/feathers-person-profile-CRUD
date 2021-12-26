const users = require('./users/users.service.js');
const person = require('./person/person.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(person);
};
