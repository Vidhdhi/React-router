import React from 'react';
import { Grid } from '@material-ui/core';

import Mail from '../components/elements/mail.js'
import Mycontent5 from '../components/elements/content5.js'



 
function mail(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6} className ="background"> <Mycontent5/>
</Grid>
<Grid item xs={6}>
   <Mail/>
</Grid>
</Grid>
  );
}
 
export default mail;