import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
let handleStartInput = (value)  =>{
    this.setState({
      startDate: value
    });
  },

  let handleEndInput = (value) => {
    this.setState({
      endDate: value
    });
  },

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        value={this.state.startDate}  
        InputLabelProps={{
          shrink: true,
        }}
      />

<TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        value={this.state.endDate}
        InputLabelProps={{
          shrink: true,
        }}
      />


    </form>
  );
}
