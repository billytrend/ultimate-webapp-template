var Fluxxor = require('fluxxor')
,	actions = require('./actions')
,	EgStore = require('./EgStore');

var stores = {
  EgStore: new EgStore(new EgStore())
};

module.exports = new Fluxxor.Flux(stores, actions);
