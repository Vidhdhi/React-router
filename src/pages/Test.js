import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import LodashTest from '../components/forms/lodashtest';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmails: [],
    };
  }
  addEmail = (abc) => {
    this.setState((state) => {
      return {
        userEmails: [...state.userEmails, abc.email],
      };
    });
  };
  deleteUserEmail(item) {
    const newState = this.state.userEmails.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({ userEmails: newState });
    }
  }
  render() {
    const { userEmails } = this.state;
    return (
      <div>
        <LodashTest getFormValue={(values) => this.addEmail(values)} />
        {isEmpty(userEmails) && <h1>emails not found!</h1>}
        {!isEmpty(userEmails) &&
          userEmails.map((item, index) => {
            return (
              <div>
                {item}
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={this.deleteUserEmail.bind(this, item)} />
                </IconButton>
              </div>
            );
          })}
      </div>
    );
  }
}
export default Test;
