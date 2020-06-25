import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const styles = () => ({
  FormHelper: {
    marginLeft: "0px",
  },
  shrink: {
    transform: "translate(0px, 0px) scale(1) !important",
    fontSize: "16px",
  },
  textField: {
    minHeight: "100px",
  },
  inputRoot: {
    height: "auto",
    marginTop: "23px",
    "& > fieldset": {
      border: "0.75px solid #3F44511F",
      top: "-2px",
      bottom: "-2px",
      "& > legend": {
        display: "none",
      },
    },
  },
  input: {
    padding: "14.5px 14px !important",
  },
});
const InputField = ({
  classes,
  id,
  name,
  label,
  placeholder,
  type,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={classes.textField}>
      <TextField
        id={id}
        name={name}
        type={type}
        label={label}
        placeholder={placeholder}
        error={error}
        helperText={error && errorMessage}
        fullWidth
        variant="outlined"
        FormHelperTextProps={{
          classes: {
            root: classes.FormHelper,
          },
        }}
        InputLabelProps={{
          shrink: true,
          classes: {
            shrink: classes.shrink,
          },
        }}
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
        }}
        {...rest}
      />
    </div>
  );
};
export default withStyles(styles)(InputField);