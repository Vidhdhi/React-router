import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import custom from './custom.css';

class Mysignup extends React.Component {  
   handleLogin = () => {  
      window.location.href = '/setprofile'; 
}  
render() {  
   return (  

      
<Grid  


         container  
        item ={12}
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  
         <h1>Create your account</h1>
   <form onSubmit={this.handleLogin}  className ="center">  
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
  
   <Button  
      type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"  
      >  
     SIGN UP 
      </Button>
      <p>Don’t you have an account? <a href ="/login">SIGNIN</a></p>  
   </form>  
   
  </Grid>  
  
     
  );  
 }    
}  
export default Mysignup;  