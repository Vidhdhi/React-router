import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import logoName from '../../assets/images/Profile.png';
import Typography from '@material-ui/core/Typography';
import InputButton from '../core/Button';
import ImgButton from '../core/ImageButton';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      background: 'transparent  0% 0% no-repeat padding-box',
      //border:' 2px solid #CBCCD1',
      opacity: ' 1',
      alignItems: 'center',
    },
    button: {
      background: '#181D331F 0% 0% no-repeat padding-box',
      borderRadius: '4px',
      opacity: '1',
    },
    upload: {
      textAlign: 'left',
      font: ' SemiBold 14px/21px Poppins',
      letterSpacing: 0,
      color: '#4DB6AC',
      textTransform: 'uppercase',
      opacity: '1',
    },
    skip: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  })
);

const Upload = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4" className={classes.tittle}>
          Set profile picture
        </Typography>
        <img src={logoName} alt="profile" className={classes.image} />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <ImgButton>upload</ImgButton>
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputButton variant="contained" fullWidth>
          Complete
        </InputButton>
        <InputButton fullWidth>Skip</InputButton>
      </Grid>
    </div>
  );
};

export default Upload;
