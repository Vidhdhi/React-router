import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publiclayouts';
import signinImage from '../assets/images/Complete-Account.png';
import UserNameForm from '../components/forms/SignupForm';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    font: ' Bold 26px/40px PT Sans',
    letterSpacing: ' 0px',
    color: ' #181D33',
    opacity: '1',
  },
});

class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        email: '',
        password: '',
        FirstName: '',
        LastName: '',
        Organization: '',
        PhoneNumber: '',
      },
    };
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
      <PublicLayout
        image={signinImage}
        title="Make decisions using multiple visualizations"
        text="Our platform is capable of communicating
         data in various graphical forms for better understanding and rational decision making."
      >
        <div className={classes.cart}>
          <h1 className={classes.header}>Complete your account</h1>
          <UserNameForm initialValues={initialValues} />
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(UserName);
