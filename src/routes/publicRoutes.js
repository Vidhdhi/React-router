import welcome from "../pages/setprofile";
import login from "../pages/login";
import Signup from "../pages/signup";
import Myprofile from "../pages/setprofile"
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
    component: Signup,
         exact:true,
},
{
    path:"/setprofile",
    component:Myprofile ,
         exact:true,
},
];
export default publicRouter