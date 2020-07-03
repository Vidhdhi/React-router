import React, { Component } from "react";
import {isEmpty} from 'lodash'
import MomentTest from "../components/forms/date";
class UserNameVadidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
    };
  }
 
 

render() {
    const {date} = this.state;
    return (
      <div>
        <MomentTest
          getFormValue={values => this.addEmail(values)}
        />
        {isEmpty(date) && <h1>emails not found!</h1>}
        {!isEmpty(date) && date.map((item, index) => {
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