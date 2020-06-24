import React from 'react';
import logo2 from '../../assets/images/Set profile picture.png'; 
import Grid from '@material-ui/core/Grid';  

function mycontent1() {
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
      <img src={logo2} className="App-logo" alt="logo" />
        
        <h1 className ="hed">Integrous data collections</h1>
        <p className ="txt">Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making.</p>
        
    </Grid>
  );
}


export default mycontent1;
