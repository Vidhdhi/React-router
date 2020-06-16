import React from 'react';
import { Grid } from '@material-ui/core';

import Myform2 from '../components/elements/successcontent.js';
import Mycontent2 from '../components/elements/conent3.js';



 
function Success(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6}> 
    <Mycontent2 />


</Grid>
<Grid item xs={6}>
< Myform2 />
</Grid>
</Grid>
  );
}
 
export default Success;