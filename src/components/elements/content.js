import React from 'react';
import logo from '../../assets/images/Iphone Xs-Artwork-Project_Managers.png'; 
import Grid from '@material-ui/core/Grid';  
import custom from './custom.css';
function content() {
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
      <img src={logo} className="App-logo" alt="logo" />
        
        <h1 className ="hed">Standard Catalogued Data</h1>
        <p className ="txt">Large volumes of diverse data systematically categorized based on distinct criteria<br></br> for easy and effective filtering of the necessary information.</p>
        
    </Grid>
  );
}


export default content;
