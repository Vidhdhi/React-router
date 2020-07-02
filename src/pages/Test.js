import React, { Component } from 'react';
import InputField from '../components/core/Input';
import ButtonField from '../components/core/Button';

import Grid from '@material-ui/core/Grid';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usermail: ['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio'],
      Input: '',

    }

  }

  handleChange = (event) => {
    this.setState({ users: event.target.value })

  }
  render() {
    const Handle = (e) => {

      if (true) {
        alert('input')
        this.setState({
          Input: e.target.value,
          usermail: [...this.state.usermail, this.state.users],
        })
      }

    }
    return (
      <div>
        <form>
          <Grid container item xs={6} sm={6} md={6} lg={6}>
            <InputField
              id={'email'}
              name={'email'}
              type={'email'}
              label={'Email address'}
              placeholder={'Enter email address'}
              onChange={this.handleChange}
              value={this.state.Input}
            />

          </Grid>
        </form>
        <ButtonField onClick={Handle} >
          add
      </ButtonField>

        <p> {this.state.users} </p>

      </div>
    );
  }
}
export default Test;