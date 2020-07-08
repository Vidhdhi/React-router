import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DateTimePicker } from '@material-ui/pickers';
import InputButton from '../core/Button';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function MaterialUIPickers(props) {
    const formik = useFormik({
    initialValues: {
      date1: props.initialValues.date1,
      date2: props.initialValues.date2,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      if(props.getFormValue){
        props.getFormValue(values)
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} >
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={formik.values.date1}
          onChange={value => formik.setFieldValue('date1', value)}
          format="DD/MM/YYYY HH:mm"
        />
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={formik.values.date2}
          onChange={value => formik.setFieldValue('date2', value)}
          format="DD/MM/YYYY HH:mm"
        />
        {/* <p> {this.calculate.initialValues.sampleDate} </p> */}
        <InputButton color="primary" type='submit'>
          Calculate interval
        </InputButton>
        {/* <p> {this.formik.initialValues.date1} </p> */}
      </Grid>
    </MuiPickersUtilsProvider>
    </form>
  );
}