import React from 'react';
import RouteWithSubRoutes from './router/routeWithSubRoutes';
import { BrowserRouter as Switch } from "react-router-dom";
import routes from './router/routes'

function App() {
  // let {href, origin} = window.location;
  // if(href == `${origin}/`){
  //   window.location = `${href}pages`;
  // }
  return (
    <Switch>
      {routes.map((route, i) => (
        // console.log(i, '214234')
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

export default App;
