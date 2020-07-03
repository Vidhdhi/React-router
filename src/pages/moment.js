import React, { Component } from "react";
import {isEmpty} from 'lodash'
import MomentTest from "../components/forms/date";
class UserNameVadidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmails: [],
    };
  }
  
render() {
    const {userEmails} = this.state;
    return (
      <div>
        <MomentTest
          getFormValue={values => this.addEmail(values)}
        />
        {isEmpty(userEmails) && <h1>emails not found!</h1>}
        {!isEmpty(userEmails) && userEmails.map((item, index) => {
          return (
            <div>
             {item} - {index} 
       
       </div>
          )
        }) }
      </div>
    );
  }
}
export default UserNameVadidate;