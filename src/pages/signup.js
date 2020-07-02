import React, { Component } from "react";
import PublicLayout from "../components/layouts/publiclayouts";
import SignupImage from '../assets/images/Complete-Account.png';
import SignupForm from '../components/forms/SignupForm';
import { withStyles } from "@material-ui/styles";
const styles = (theme) => ({

  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        First_name: '',
        Last_name: '',
        Organization: '',
        Phone_number: '',
        email: '',
        password: '',
      },
    };
  }

  render() {
    const { classes } = this.props; return (
      <PublicLayout
        image={SignupImage}
        title="Make decisions using multiple visualizations"
        text="Our platform is capable of communicating data in various graphical forms for better understanding and rational decision making."
      >
        <div className={classes.cart}>

          <SignupForm />
        </div>
      </PublicLayout>
    )
  }
} export default withStyles(styles)(Signup);