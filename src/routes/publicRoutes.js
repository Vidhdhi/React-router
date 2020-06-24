import welcome from "../pages/setprofile";
import login from "../pages/login";
import Signup from "../pages/signup";
import Myprofile from "../pages/setprofile";
import success from "../pages/success";
import Forgetpass from "../pages/Forgetpassword";
import mail from "../pages/mailres";
import reset from "../pages/reset";

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
    path:"/forgetpassword",
    component:Forgetpass ,
         exact:true,
},
{
    path:"/mailres",
    component: mail ,
         exact:true,
},
{
    path:"/reset",
    component: reset ,
         exact:true,
},

];
export default publicRouter