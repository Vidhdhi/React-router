import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { useFormik } from 'formik';

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

const LoginForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: '',
    
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      
      <label htmlFor="firstName">First Name</label>
      <TextField
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        fullWidth
        variant="outlined"
        placeholder='Enter Name'
      />
  
      <label htmlFor="email">Email Address</label>
      <TextField
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        fullWidth
        variant="outlined"
        placeholder='Enter password'
      />
      <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  );
};
export default LoginForm;