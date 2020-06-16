import welcome from "../pages/setprofile";
import login from "../pages/login";
import Signup from "../pages/signup";
import Myprofile from "../pages/setprofile";
import success from "../pages/success";
import error from "../pages/eror";
import Forgetpass from "../pages/forgetpassword";


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
    path:"/success",
    component:success ,
         exact:true,
},
{
    path:"/setprofile",
    component:Myprofile ,
         exact:true,
},
{
    path:"/error",
    component:error ,
         exact:true,
},
{
    path:"/forgetpassword",
    component:Forgetpass ,
         exact:true,
},
];
export default publicRouter