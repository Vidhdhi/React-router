import React from 'react';  
import Button from '@material-ui/core/Button';    
import Grid from '@material-ui/core/Grid';  

import CheckIcon from '@material-ui/icons/Check';

 
class Mail extends React.Component {  
  
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
            <CheckIcon />
<h1>Confirmation email has been sent!</h1>
<p>
Please check your email inbox and click on the “Reset password” button.
</p>
<Button type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"   >BACK TO SIGN In page</Button>
      </div>
  </Grid> 
  
  );  
 }    
}  
export default Mail;  