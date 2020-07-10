import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publiclayouts';
import Image from '../assets/images/Set-Profile.png';
import ImageUpload1 from '../components/ImageUpload/upload';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  tittle: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    font: ' Bold 32px/40px PT Sans',
    letterSpacing: ' 0px',
    color: '#181D33',
    opacity: ' 1',
  },
});

class ImageUpload extends Component {
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
        image={Image}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
          <ImageUpload1 initialValues={initialValues} />
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(ImageUpload);
