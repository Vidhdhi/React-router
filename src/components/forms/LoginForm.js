import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputField from '../core/Input';
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
  })
);

const LoginForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: props.initialValues.email,
      password: props.initialValues.password,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('email', vaule)}
          onBlur={() => formik.setFieldTouched('email')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'password'}
          name={'password'}
          type={'password'}
          label={'Password'}
          placeholder={'Enter password'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
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

export default LoginForm;
