import welcome from "../pages/welcome";
import login from "../pages/login";
import Mysignup from "../components/elements/signup";
const publicRouter =[ 
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
{
    path:"/signup",
    component:Mysignup ,
         exact:true,
},
];
export default publicRouter