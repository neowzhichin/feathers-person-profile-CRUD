const { authenticate } = require('@feathersjs/authentication').hooks;

const processPerson = require('../../hooks/process-person');

const patchPerson = require('../../hooks/patch-person');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processPerson()],
    update: [],
    patch: [patchPerson()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
