import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';  
import logo from '../../Assets/namecheap.png'; 

class Myform extends React.Component {  
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
 
 <img src={logo} className="App-logo" alt="logo" />
 <br></br>
   <form onSubmit={this.handleLogin}>  
   <label>Username</label>
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
   <p>Forgot password? <a href ="/forgetpassword">RESET</a></p>
   <Button  
      type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"  
      >  
     SIGN IN 
      </Button>
      <p>Don’t you have an account? ?<a href ="/signup">SIGNUP</a></p>  
   </form>  
  </Grid>  
  );  
 }    
}  
export default Myform;  