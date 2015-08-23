window.$ = require('jquery');
window.jQuery = $;
require("../index.html");
require("../css/main.css");

var React = require('react')
,	flux = require('./models/flux')
,	routes = require('./Router.jsx')
,	Router = require('react-router');

Router.run(routes, function (Handler) {
	React.render(
	    <Handler flux={ flux } />,
	    document.getElementById('root')
	);
});