var React = require('react')
,	Root = require('./views/Root.jsx')
,	Router = require('react-router').Router
,	Route = require('react-router').Route
,	Child = require('./views/Child.jsx');

module.exports = <Route handler={ Root }>
	<Route name='home' path='/' handler={ Child } />
</Route>