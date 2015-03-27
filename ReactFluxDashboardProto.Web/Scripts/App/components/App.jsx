// Main application page

"use strict";

// ------------------------------------------ Dependencies

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var ConfigurationForm = require("./ConfigurationForm.jsx");
var FactoryOverview = require("./FactoryOverview.jsx");
var LineOverview = require("./LineOverview.jsx");
var StationDetails = require("./StationDetails.jsx");
var GlobalErrorList = require("./GlobalErrorList.jsx");
var NotFound = require("./NotFound.jsx");

var App = React.createClass({

    render: function () {
        return (
            <div className="container-fluid">

                { /* Navigation */ }
                <div className="navigation">
                    <ul className="nav nav-tabs">
                        <li role="presentation"><Link to="factoryOverview">Dashboard</Link></li>
                        <li role="presentation"><Link to="dashboard">Search</Link></li>
                        <li role="presentation"><Link to="configuration">Configuration</Link></li>
                    </ul>
                </div>

                { /* Dashboard */ }
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <RouteHandler/>
                    </div>
                </div>

                { /* Errors */}
                <GlobalErrorList />

            </div>
        );
    }

});

var routes = (
    <Route name="dashboard" path="/" handler={App}>
        <DefaultRoute handler={FactoryOverview}/>

        <Route name="factoryOverview" handler={FactoryOverview}/>
        <Route name="lineOverview" path="line/:lineId" handler={LineOverview}/>
        <Route name="stationDetails" path="line/:lineId/station/:stationId" handler={StationDetails}/>
        <Route name="configuration" handler={ConfigurationForm}/>

        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('dashboard-content'));
});

//React.render(
//    <App />,
//    document.getElementById('dashboard-content')
//);