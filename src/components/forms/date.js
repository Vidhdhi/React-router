import React from 'react';

import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import InputField from '../core/Input';
import Buttons from "../core/Button";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formCart: {
    maxWidth: "430px",
    width: "100%",
  },
});




function DateAndTimePickers(props) {
  const { classes } = props;

  
  return (
    <form className={classes.formCart}>
    <Grid container item xs={12} sm={12} md={12} lg={12}>
    <InputField
                id="date-picker-inline"
      label="Enter date and time"
        type="datetime-local"
  placeholder="enter date and time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       </Grid>
       <InputField
                id="date-picker-inline"
      label="Enter date and time"
        type="datetime-local"
  placeholder="enter date and time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
            <Buttons color="primary">Count days</Buttons>

    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);