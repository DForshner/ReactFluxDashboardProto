"use strict";

var React = require("React");

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var LineActionCreators = require('../actions/LineActionCreators');

var LinesDashboard = require("./LinesDashboard.jsx");
var NotFound = require("./NotFound.jsx");

// Eager load data
LineActionCreators.loadAll();

var App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="nav nav-tabs">
              <li role="presentation"><Link to="dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col-md-9">
              <h2>Title</h2>
          </div>
        </div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={LinesDashboard}/>
        <Route name="dashboard" handler={LinesDashboard}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('dashboard-content'));
});