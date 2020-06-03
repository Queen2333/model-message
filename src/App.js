import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from './router/router';

function App() {
  return (
    <Router>
        <div className="App">
          {
            router.map(({path, componentName, exact = true, routes = []}, key) => {
                return <Route
                          exact={exact}
                          key={key}
                          path={path}
                          component={componentName}
                        />
            })
          }
        </div>
      </Router>
  );
}

export default App;
