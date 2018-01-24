import React, { Component } from 'react'
import {connect} from 'react-redux'

class List extends Component {
    
    list (data){
        const child = (items) => {
            if(items){
                return <ul> {this.list(items)} </ul>
            }
        }
        return data.map((node,index) => {
            return <Item key = {node.id} name ={node.name}>
            {child(node.items)}
            </Item>
        })
    }
    render (){

    if(!this.props.data)
        return <span>No data</span>
      return (<ul>
          {this.list(this.props.data)}
        </ul>)
    }
}

const mapDispatchToProps = (state) => {
    return {
        data : state.data
    }
}

class Item extends Component {
    constructor(){
        super();
        this.state = {
            expanded : false,
            name : "+"
        }
    }
    display (){
        if(this.state.expanded)
        {
            this.setState({
                expanded: !this.state.expanded,
                name: "+"
            }); 
        }
        else
        {
            this.setState({
                expanded: !this.state.expanded,
                name: "-"
            });
        }      
    }
    getExpandedText(props){
        if(this.state.expanded)
            return <span>{this.props.children}</span>;
        else
            return null;
    }
    render (){
      var expandedDiv = this.getExpandedText(this.props.children);
      return (<div style={{backgroundColor : 'yellow'}}>
            <li>           
                <button onClick={this.display.bind(this)}>{this.state.name} </button>
                <b>{this.props.name}<hr/>{ expandedDiv }</b>
            </li>
        </div>)
    }
}

export default connect(mapDispatchToProps)(List)