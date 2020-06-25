import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  image: {
    [theme.breakpoints.up('md')]: {
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
  const { children, text, title, image} = props;

  return (
    <Grid
      item
      xs={12}
      classes={{
        root: classes.root,
      }}
    >
      <Grid item sm={false} md={6} className={classes.image}>
        <div className={classes.container}>
          <Box align="center" px={10}>
            <img alt={title} src={image} className={classes.img} />
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{text}</Typography>
          </Box>
        </div>
      </Grid>

      <Grid item xs={6} className={classes.container}>
        {children}
      </Grid>
    </Grid>
  );
}

export default PublicLayout;
