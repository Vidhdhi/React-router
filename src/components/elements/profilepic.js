import React from 'react';  
import Button from '@material-ui/core/Button';    
import Grid from '@material-ui/core/Grid';  
import Avatar from '@material-ui/core/Avatar';
import Mycontent1 from './conent3.js';
import  UploadButtons from '../Layouts/uploadbutton';
 
class Myprofile extends React.Component {  
   handleLogin = () => {  
   alert("Login form example using MATERIAL UI");  
}  

render() {  
   return (  
  


      <Grid 
         container  
        
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  
 <h1>profile pic</h1>
 <Avatar style ={{width:200,height:200} }  src="../../Assets/Profile.png"  />
 <Button
        variant="contained"
        color="default"
       fullWidth
        
      >
        Upload
      </Button>
      <br></br>
  
  </Grid> 
  
  
  );  
 }    
}  
export default Myprofile;  