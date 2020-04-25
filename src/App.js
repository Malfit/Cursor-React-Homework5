import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import routes from './routes';

function App() {
  return(
    <div className="app">
    <Router>
    <>
      <Switch>
        {
          routes.map(route => (
            <Route
              exact={route.exact}
              key={route.toString()}
              path={route.path}
            >
              {route.component}
            </Route>
                ))
        }
      </Switch>      
    </>   
    </Router>
    </div>
  );
}

export default App;


