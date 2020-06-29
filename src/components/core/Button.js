import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({

   
  });

  const ButtonField = ({
    classes,
    ...rest
  }) => {
    return (
      <div className={classes.textField}>
        <Button
          fullWidth='True'
          color='primary'
          variant="contained"
          type={'submit'}
          {...rest}
        />
      </div>
    );
  };
  export default withStyles(styles)(ButtonField);