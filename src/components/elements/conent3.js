import React from 'react';
import logo2 from '../../Assets/Set profile picture.png'; 
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
    >  
      <img src={logo2} className="App-logo" alt="logo" />
        
        <h1 className ="log">Integrous data collections</h1>
        <p className ="test">Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making.</p>
        
    </Grid>
  );
}


export default mycontent1;
