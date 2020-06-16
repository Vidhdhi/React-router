import React from 'react';
import { Grid } from '@material-ui/core';

import Reset from '../components/elements/forgetpassword.js'
import Mycontent4 from '../components/elements/content4.js'



 
function Forgetpass(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6}> <Mycontent4/>
</Grid>
<Grid item xs={6}>
   <Reset/>
</Grid>
</Grid>
  );
}
 
export default Forgetpass;