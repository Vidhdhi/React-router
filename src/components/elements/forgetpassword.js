import React from 'react';  
import Button from '@material-ui/core/Button';    
import Grid from '@material-ui/core/Grid';  
import TextField from '@material-ui/core/TextField'; 

 
class Reset extends React.Component {  
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
        
         >  <div className ="center" >
<h1 className ="hed">Forgot password</h1>
<label>Email</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Enter your email "  
   /> 

<Button type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"   >RESET PASSWORD</Button>
      </div>
  </Grid> 
  
  );  
 }    
}  
export default Reset;  