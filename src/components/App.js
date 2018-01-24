import React, { Component } from 'react';
import List from '../containers/List';
import data from '../reducers/data'


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div style={{width : 500, backgroundColor : 'green'}}>
      <List/>
      </div>
    );
  }
}

export default App;
