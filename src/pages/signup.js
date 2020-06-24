import React from 'react';
import { Grid } from '@material-ui/core';

import Myform from '../components/elements/signup.js'
import Mycontent from '../components/elements/content2.js'



 
function Signup(props) {
  return(
<Grid container >
    <Grid item xs={6}> <Mycontent/>
</Grid>

<Grid item xs={6}>
   <Myform/>
</Grid>
</Grid>
  );
}
 
export default Signup;