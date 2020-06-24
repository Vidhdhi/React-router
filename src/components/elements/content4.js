import React from 'react';
import logo4 from '../../assets/images/Forgot password.png'; 
import Grid from '@material-ui/core/Grid';  
import './custom.css';
function mycontent4() {
  return (
    <Grid  
    container  
    spacing={0}  
    direction="column"  
    alignItems="center"  
    justify="center"  
    style={{ minHeight: '100vh' }}  
    className ="bgcol"
    >  
      <img src={logo4} className="App-logo" alt="logo" />
        
        <h1 className ="hed">Instant Datasets at your fingertips</h1>
        <p className ="txt">Work faster and smarter with our readily updated datasets at your disposal. We deliver regulated data for better performance.</p>
        
    </Grid>
  );
}


export default mycontent4;
