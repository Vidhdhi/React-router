import React from 'react';  
import Button from '@material-ui/core/Button';    
import Grid from '@material-ui/core/Grid';  


 
class successful extends React.Component {  
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
         <div className ="center">
<h1>Your account creation is failed!</h1>
<p>
Please check your information and try again.
</p>
<Button type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"   >GO BACK</Button>
      </div>
  </Grid> 
  
  );  
 }    
}  
export default successful;  