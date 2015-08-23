var React = require('react')
,	flux = require('../models/flux')
,	Fluxxor = require('fluxxor')
,	FluxMixin = Fluxxor.FluxMixin(React)
,	StoreWatchMixin = Fluxxor.StoreWatchMixin
,	RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({

	mixins: [FluxMixin, StoreWatchMixin("EgStore")],

	getInitialState: function() {
		return {};
	},

	getStateFromFlux: function() {
		return this.getFlux().store("EgStore").getState();
	},

	render: function() {
		return <div>
			{ this.state.message }
		</div>
	}
});