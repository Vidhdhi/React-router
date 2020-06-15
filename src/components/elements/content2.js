import React from 'react';
import logo1 from '../../Assets/Complete your account.png'; 
import Grid from '@material-ui/core/Grid';  

function mycontent() {
  return (
    <Grid  
    container  
    spacing={0}  
    direction="column"  
    alignItems="center"  
    justify="center"  
    style={{ minHeight: '100vh' }}  
    >  
      <img src={logo1} className="App-logo" alt="logo" />
        
        <h1 className ="log">Make decisions using multiple visualizations</h1>
        <p className ="test"> Our platform is capable of communicating data in various graphical forms for better understanding and rational decision making.</p>
        
    </Grid>
  );
}


export default mycontent;