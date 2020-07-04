import React ,{Component} from 'react';
import KeyboardDatePickerExample from '../components/forms/date';
import ButtonField from '../components/core/Button';

class momentest extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  

  render() {
    return (
      <div>
       
        <KeyboardDatePickerExample/>
        
        <ButtonField>
       count
      </ButtonField>
      
        </div>
    );
  }
}

export default momentest;
