import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputField from '../core/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputButton from '../core/Button';

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
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        '& > :nth-child(n+1)': {
          padding: '0 16px',
        },
      },
    },
  })
);

const UserNameForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: props.initialValues.email,
      password: props.initialValues.password,
      FirstName: props.initialValues.FirstName,
      LastName: props.initialValues.LastName,
      Organization: props.initialValues.Organization,
      PhoneNumber: props.initialValues.PhoneNumber,
    },
    validationSchema: Yup.object({
      FirstName: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
      LastName: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
      Organization: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      PhoneNumber: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
      password: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'FirstName'}
          name={'FirstName'}
          type={'name'}
          label={'First name'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.FirstName) && formik.touched.FirstName}
          errorMessage={formik.errors.FirstName}
          value={formik.values.FirstName}
          getValue={(vaule) => formik.setFieldValue('FirstName', vaule)}
          onBlur={() => formik.setFieldTouched('FirstName')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'LastName'}
          name={'LastName'}
          type={'name'}
          label={'Last name'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.LastName) && formik.touched.LastName}
          errorMessage={formik.errors.LastName}
          value={formik.values.LastName}
          getValue={(vaule) => formik.setFieldValue('LastName', vaule)}
          onBlur={() => formik.setFieldTouched('LastName')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Organization'}
          name={'Organization'}
          type={'name'}
          label={'Organization'}
          placeholder={'Enter email address'}
          error={
            Boolean(formik.errors.Organization) && formik.touched.Organization
          }
          errorMessage={formik.errors.Organization}
          value={formik.values.Organization}
          getValue={(vaule) => formik.setFieldValue('Organization', vaule)}
          onBlur={() => formik.setFieldTouched('Organization')}
        />
      </Grid>
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
          id={'PhoneNumber'}
          name={'PhoneNumber'}
          type={'name'}
          label={'Phone number'}
          placeholder={'Enter email address'}
          error={
            Boolean(formik.errors.PhoneNumber) && formik.touched.PhoneNumber
          }
          errorMessage={formik.errors.PhoneNumber}
          value={formik.values.PhoneNumber}
          getValue={(vaule) => formik.setFieldValue('PhoneNumber', vaule)}
          onBlur={() => formik.setFieldTouched('PhoneNumber')}
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

      <InputButton
        fullWidth
        type={'submit'}
        variant="contained"
        color="primary"
      >
        Sign In
      </InputButton>
    </form>
  );
};

export default UserNameForm;
