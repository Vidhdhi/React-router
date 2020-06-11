import React , {Component} from 'react';

import publicRoutes from '../routes/publicRoutes'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  publicRoute = (route,index) => { 
  return (  
    <Route
    key ={index}
    path ={route.path}
    component ={route.component}
    exact={route.exact}
    />
    
  );
};

render (){
return ( 
<BrowserRouter>
<switch>
{publicRoutes.map((route,index)=> this.publicRoute(route ,index))}
</switch>
</BrowserRouter>
);
 }
}

export default App;
