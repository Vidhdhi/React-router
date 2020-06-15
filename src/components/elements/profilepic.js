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
 <h1>profile pic</h1>
 <Avatar style ={{width:200,height:200} }  src="../../Assets/Profile.png"  />
 <Button
        variant="contained"
        color="default"
       
        
      >
        Upload
      </Button>
   <Button variant="contained" disabled></Button>
  </Grid> 
  </Grid> 
  
  );  
 }    
}  
export default Myprofile;  