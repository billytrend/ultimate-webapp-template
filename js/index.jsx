window.$ = require('jquery');
window.jQuery = $;
require("../index.html");
require("../css/main.css");

var React = require('react')
,	Root = require('./views/root.jsx')
,	flux = require('./models/flux');

React.render(
    <Root flux={ flux } />,
    document.getElementById('root')
);