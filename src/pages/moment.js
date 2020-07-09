import React, { Component } from 'react';
import moment from 'moment';
import MaterialUIPickers from '../components/forms/date';


class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        date1: new Date(),
        date2: new Date(),
        differnt:''
      },
    };
  }

  
  countRemain = (values) => {
   const differnt = moment(values.date1).diff(moment(values.date2),'days');
   this.setState({differnt:differnt})
  };
  render() {
    // const {} = this.props;
    const { initialValues } = this.state;
    return (
      <div>
        <MaterialUIPickers initialValues = {initialValues}
        getFormValue={values=>this.countRemain(values)}/>
              <p>{this.state.differnt} </p>
      </div>
    );
  }
}
export default Moment;