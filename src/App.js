import React from 'react';
import RouteWithSubRoutes from './router/router'
import { BrowserRouter as Switch } from "react-router-dom";
import routes from './router/routes'

function App() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

export default App;
