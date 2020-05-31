import React, { Component } from 'react';
import "./todo.css"
class Todo extends Component {
 
    render() {
        const withoutArea=<div role="list" className="ui divided relaxed list componentTodo">
        <div role="listitem" className="item">
          <i aria-hidden="true" className="github large icon middle aligned"></i>
          <div className="content containerList">
              <div>
            <h1 className="header">{this.props.Data.title}</h1>
            <p className="description">{this.props.Data.time}</p>
            </div>
            <button className="ui icon button" onClick={()=>this.props.delete(this.props.Data.id)} >X</button>
            <button className="ui icon button" onClick={this.props.showeditInput} >e</button>
          </div>
        </div>
        </div>
        
        const withArea=<div role="list" className="ui divided relaxed list">
        <div role="listitem" class="item">
          <i aria-hidden="true" className="github large icon middle aligned"></i>
          <div className="content containerList">
              <div>
            <h1 className="header">{this.props.Data.title}</h1>
            <p className="description">{this.props.Data.time}</p>
            </div>
            <button className="ui icon button" onClick={()=>this.props.delete(this.props.Data.id)} >X</button>
            <div className="ui focus input"><input type="text" placeholder="edit your to do" onChange={this.props.handlechangeEdit} /></div>
            <button className="ui icon button" onClick={()=>this.props.edit(this.props.Data.id)} >edit</button>
          </div>
        </div>
        </div>
        if(this.props.showText)
        return withoutArea
        else
        return withArea
            
        
    }
}

export default Todo;