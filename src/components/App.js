import React, { Component } from 'react';
import List from '../containers/List';

class App extends Component {

  render() {
    return (
      <div style={{width : 500, backgroundColor : 'green'}}>
      <List/>
      </div>
    );
  }
}

export default App;
