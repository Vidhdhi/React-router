import React, { Component } from 'react';
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ['mango']
    }
    this.selectFruit = this.selectFruit.bind(this);
  }

  selectFruit(e) {
    if(e.target.checked) {
      this.setState({
        fruits: [ ...this.state.fruits, e.target.value],
      }, () => {
        console.log(this.state.fruits);
      });
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="checkbox" id="apple" name="fruit" value="Apple"
          		onClick={this.selectFruit}/>Apple <br/>
          <input type="checkbox" id="mango" name="fruit" value="Mango"
          		onClick={this.selectFruit}/>Mango <br/>
          <input type="checkbox" id="pear" name="fruit" value="Pear"
          		onClick={this.selectFruit}/>Pear <br/>
        </form>
      </div>
    );
  }
}
export default Test ;