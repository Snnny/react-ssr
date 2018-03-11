import React from 'react'
import {Route, Switch } from 'react-router-dom';
import  {ConnectedRouter}  from 'react-router-redux';
import routesConfig from './routes';

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);


const Routers=({history})=>(
  <ConnectedRouter history={history}>
    <div>
      {routesConfig.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </ConnectedRouter>
)

export default Routers;