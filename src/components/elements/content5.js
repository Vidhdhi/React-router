import React from 'react';
import logo5 from '../../assets/images/Confirmation.png'; 
import Grid from '@material-ui/core/Grid';  
import custom from './custom.css';
function mycontent5() {
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
      <img src={logo5} className="App-logo" alt="logo" />
        
        <h1 className ="hed">We help you to archive your goals</h1>
        <p className ="txt" >We are dedicated to delivering data that defines your purpose. Our vault holds significant data to cater your requirements.</p>
        
    </Grid>
  );
}


export default mycontent5;
