import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(0),
       width: '50ch',
     },
   },
 }));






 export default function Reset() {  
   const classes = useStyles();
 
   return (  
      <Grid  
         container  
        
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         
         >  
 
 
 <h1>Change password</h1>
   <form >  
   <label>Old password</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Enter your old password"  
   /> 
 <label>New password</label>
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Enter user’s new password"  
      type="password"  
   />  
  </form>  
  <Button  
      type="submit"  
      
      variant="contained"  
      color ="default"
      >  
Cancel
      </Button>
   <Button  
      type="submit"  
      
      variant="contained"  
      color="primary"  
      >  
Change
      </Button>
  </Grid>  
  );  
 }    
 
