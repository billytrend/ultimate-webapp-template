var Fluxxor = require('fluxxor')
,	constants = require('./constants');

module.exports = Fluxxor.createStore({

	initialize: function() {
		this.eg = {};

		this.bindActions(
			constants.EG, this.eg
		);
	},

	eg: function() {

	},

	getState: function() {
		return {
			message: "Hello World"
		};
	}
});