import welcome from "../pages/Welcome";
import login from "../pages/Login";
import Signup from "../pages/Signup";
import Myprofile from "../pages/Set-Profile";
import success from "../pages/Success-Msg";
import Forgetpass from "../pages/Forget-Password";
import mail from "../pages/Mail-Response";
import reset from "../components/forms/ResetForm";
import Test from "../pages/Test";

const publicRouter =[ 
{
path:"/",
component:welcome,
exact:true,
},
{
    path:"/test",
    component:Test,
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