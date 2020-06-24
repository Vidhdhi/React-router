import React from 'react';
import { Grid } from '@material-ui/core';

import Myform from '../components/elements/profilepic.js'
import Mycontent from '../components/elements/conent3.js'



 
function Setprofile(props) {
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
 
export default Setprofile;