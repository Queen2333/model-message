import React from 'react';
import RouteWithSubRoutes from './router/routeWithSubRoutes';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from './router/routes'

function App() {
  // let {href, origin} = window.location;
  // if(href == `${origin}/`){
  //   window.location = `${href}pages`;
  // }
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          // console.log(i, '214234')
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
