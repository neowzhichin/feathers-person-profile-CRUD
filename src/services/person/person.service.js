// Initializes the `person` service on path `/person`
const { Person } = require('./person.class');
const createModel = require('../../models/person.model');
const hooks = require('./person.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/person', new Person(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('person');

  service.hooks(hooks);
};
