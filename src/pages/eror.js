import React from 'react';
import { Grid } from '@material-ui/core';

import Myform4 from '../components/elements/errormsg.js';
import Mycontent4 from '../components/elements/conent3.js';



 
function Error(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6}> 
   < Mycontent4 />
</Grid>
<Grid item xs={6}>
<Myform4 />
</Grid>
</Grid>
  );
}
 
export default Error ;