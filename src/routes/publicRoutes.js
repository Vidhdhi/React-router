import welcome from "../pages/welcome";
import login from "../pages/login";

const publicRouter ={

{
path:"/",
component:welcome,
exact:true,

},
{

    path:"/login",
    component:login,
    exact:true,
    



},

    
};

export default publicRouter