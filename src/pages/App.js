import React, { Component } from 'react';
import publicRoutes from '../routes/publicRoutes';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  publicRoute = (route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {publicRoutes.map((route, index) => this.publicRoute(route, index))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
