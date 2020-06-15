import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Myform from '../elements/form.js'
import Mycontent from '../elements/content.js'



 
function Publiclayout(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6}> <Mycontent/>
</Grid>
<Grid item xs={6}>
   <Myform/>
</Grid>
</Grid>
  );
}
 
export default Publiclayout;