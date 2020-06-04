import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default RouteWithSubRoutes