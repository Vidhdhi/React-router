import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  image: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    display: 'none',
    backgroundColor: 'rgba(253, 253, 253, 1)',
  },
  paper: {
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    paddingBottom: '25px',
  },
}));

function PublicLayout(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
      <Grid
          item
          xs={12}
          classes={{
            root: classes.root,
          }}
      >
        {matches && <Grid item sm={12} md={6} >
          <div className={classes.container}>
            <Box align="center" px={10}>
              <img alt={props.title} src={props.image} className={classes.img}/>
              <Typography variant="h5">{props.title}</Typography>
              <Typography variant="subtitle1">{props.text}</Typography>
            </Box>
          </div>
        </Grid>}
        <Grid item xs={12}  md={6} className={classes.container}>
          {props.children}
        </Grid>
      </Grid>
  );
}

export default PublicLayout;