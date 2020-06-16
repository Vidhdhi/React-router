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
<h1>Your account completed!</h1>
<p>
You can now access your dashboard using your credentials.
</p>
<Button type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"   >Go to dashboard</Button>
  </Grid> 
  
  );  
 }    
}  
export default successful;  