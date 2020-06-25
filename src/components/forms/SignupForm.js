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

const SignupForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      First_name:props.initialValues.First_name,
      Last_name:props.initialValues.Last_name,
      Organization:props.initialValues.Organization,
      email: props.initialValues.email,
      Phone_number:props.initialValues.Phone_number,
      password: props.initialValues.password,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      Organization: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      Phone_number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),

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
          id={'First_name'}
          name={'First_name'}
          type={'First_name'}
          label={'First name'}
          placeholder={'Enter your First name'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('First_name', vaule)}
          onBlur={() => formik.setFieldTouched('First_name')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Last_name'}
          name={'Last_name'}
          type={'Last_name'}
          label={'Last name'}
          placeholder={'Enter your Last name'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('Last_name', vaule)}
          onBlur={() => formik.setFieldTouched('Last_name')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Organization'}
          name={'Organization'}
          type={'Organization'}
          label={'Organization '}
          placeholder={'Enter your Organization'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('Organization', vaule)}
          onBlur={() => formik.setFieldTouched('Organization')}
        />
     
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
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Phone_number'}
          name={'Phone_number'}
          type={'Phone_number'}
          label={'Phone number'}
          placeholder={'Enter Phone number'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('Phone_number', vaule)}
          onBlur={() => formik.setFieldTouched('Phone_number')}
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
      <Button fullWidth type={'submit'} variant="contained" color="primary">
        Sign up
      </Button>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
        Already have an account?  <Link to={'/login'}> SIGN IN</Link>
        </Box>
      </Grid>
      
    </form>
  );
};

export default SignupForm;
