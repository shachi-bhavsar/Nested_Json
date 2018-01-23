import React, { Component } from 'react';
import data from './data';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text : ''
    }
  }
  update(){
    this.setState({
      text : this.refs.a.value,
    })
  }

  render() {
    return (
      <div style={{width : 500, backgroundColor : 'green'}}>
      <List data ={data}/>
      </div>
    );
  }
}

export default App;

/* <button>I <Hearts/> React</button>
   <input type="text" ref="a" onChange={this.update.bind(this)}/>
    {this.state.text}
class Hearts extends Component {
  render(){
    return(
       <span>&hearts;</span>
    )
  }
}*/
