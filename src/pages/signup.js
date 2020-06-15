import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> 
                  
                    <p className ="log">Standard Catalogued Data</p>
        <p className ="test">Large volumes of diverse data systematically categorized based on distinct criteria<br></br> for easy and effective filtering of the necessary information.</p></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> <form   >
      
      <p>Username</p>
      <input
      className='size'
        type='text'
        name='username'
        placeholder ='Place holder'
        
      />
      <p>Password</p>
      <input
      className='size1'
        type='text'
        name='age'
        placeholder ='Typed text'
        
      />
      
      <p>Forgot password? RESET</p>
      <button className ="btn">SIGN in</button>
      </form></Paper>
                </Grid>
                
            </Grid>
        </div>
    );
}