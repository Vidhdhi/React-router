import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Formik, Form, Field } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
    Field:{
      width: '100%',
      height:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const SignupSchema  = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const LoginForm = (props) => {
  const classes = useStyles();

  
  return (
    
    <Formik
    initialValues={{
      firstName: '',
      
      email: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="firstName"   fullWidth
        variant="outlined"/>
        {errors.firstName && touched.firstName ? (
          <div>{errors.firstName}</div>
        ) : null}
      
        <Field name="email" type="email" fullWidth
        variant="outlined"/>
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
      </Form>
    )}
  </Formik>
  );
};
export default LoginForm;
