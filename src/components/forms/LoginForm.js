import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
​
const useStyles = makeStyles((theme) =>
  createStyles({
    forgotText: {
      fontSize: '14px',
      letterSpacing: '0',
      fontWeight: 400,
      color: '#4E598348',
      paddingBottom: '16px',
    },
    apiError: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ff1744',
      fontSize: '14px',
    },
    formCart: {
      maxWidth: '430px',
      width: '100%',
    },
  })
);
​
const LoginForm = (props) => {
  const classes = useStyles();
​
  return (
    <form className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <TextField
          type={'email'}
          label={'Email address'}
          fullWidth
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <TextField
          type={'password'}
          label={'Password'}
          placeholder={'Enter password'}
          fullWidth
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
          Forgot password? <Link to={'/forgot-password'}>RESET</Link>
        </Box>
      </Grid>
      <Button fullWidth type={'submit'} variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
};
​
export default LoginForm;