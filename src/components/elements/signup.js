import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';  
import Mycontent from './content2.js';

class Mysignup extends React.Component {  
   handleLogin = () => {  
   alert("Login form example using MATERIAL UI");  
}  
render() {  
   return (  

    <Grid container item xs={12}>
    <Grid item xs={6}> 
  <Mycontent/>
</Grid>
<Grid item xs={6}>
<Grid  
         container  
        
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  
   <form onSubmit={this.handleLogin}>  
   <label>First name</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Place holder"  
   />  
      <label>Last name</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Place holder"  
   />  
      <label>Organization</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Place holder"  
   />  
      <label>Email</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Place holder"  
   />  
    <label>Phone number</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Place holder"  
   />  
 <label>Password</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Typed text"  
      type="password"  
   />  
   <p>Forgot password? RESET</p>
   <Button  
      type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"  
      >  
     SIGN IN 
      </Button>
      <p>Don’t you have an account? SIGNUP</p>  
   </form>  
  </Grid>  
</Grid>
</Grid>
     
  );  
 }    
}  
export default Mysignup;  