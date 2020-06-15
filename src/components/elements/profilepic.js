import React from 'react';  
import Button from '@material-ui/core/Button';    
import Grid from '@material-ui/core/Grid';  
import Avatar from '@material-ui/core/Avatar';
import Mycontent1 from './conent3.js';

class Myprofile extends React.Component {  
   handleLogin = () => {  
   alert("Login form example using MATERIAL UI");  
}  
render() {  
   return (  
    <Grid container item xs={12}>
    <Grid item xs={6}> 
 <Mycontent1 />
</Grid>

      <Grid item xs={6} 
         container  
        
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  
 
 <Avatar alt="Remy Sharp" src="../../Assets/Profile.png"  />
   <button variant="contained" disabled></button>
  </Grid> 
  </Grid> 
  
  );  
 }    
}  
export default Myprofile;  