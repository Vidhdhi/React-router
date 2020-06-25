import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sharma',
    };
  }

  render() {
    return (
      <div>
        <h1>Hi {this.state.name}</h1>
      </div>
    );
  }
}

export default Welcome;
