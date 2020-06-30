import React, { Component } from 'react';
import InputField from '../components/core/Input';
import ButtonField from '../components/core/Button';

import Grid from '@material-ui/core/Grid';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio']
    }
   
  }
  
  handleChange = (event) => {
    this.setState({users: event.target.value})
    
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <form>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
          onChange={this.handleChange}
           value={users}
         />
      </Grid>
      </form>
      <ButtonField>
        add
      </ButtonField>
      </div>
    );
  }
}
export default Test ;