import React from 'react';
import { Button } from '@material-ui/core';
import publicRoutes from '../routes/publicRoutes'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
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
return {
<BrowserRouter>
<switch>
{publicRoutes.map((route,index)=> this.publicRouter(route ,index))}

</switch>



</BrowserRouter>


};

 }


}

export default App;
