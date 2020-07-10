import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publiclayouts';
import signinImage from '../assets/images/Signin.png';
import logo from '../assets/logos/Logo.png';
import LoginForm from '../components/forms/LoginForm';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
    [theme.breakpoints.down('md')]: {
      width: '200px',
      margin: 'auto',
    },
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        email: '',
        password: '',
      },
    };
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
      <PublicLayout
        image={signinImage}
        title="Standard Catalogued Data"
        text="Large volumes of diverse data systematically categorized based on distinct criteria for easy and effective filtering of the necessary information."
      >
        <div className={classes.cart}>
          <img src={logo} alt="logo" className={classes.logo} />
          <LoginForm initialValues={initialValues} />
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(Login);
