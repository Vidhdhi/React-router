import welcome from "../pages/welcome";
import login from "../pages/login";
import Mysignup from "../components/elements/signup";
import Myprofile from "../components/elements/profilepic"
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
{
    path:"/setprofile",
    component:Myprofile ,
         exact:true,
},
];
export default publicRouter