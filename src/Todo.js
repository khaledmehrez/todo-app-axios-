import React, { Component } from 'react';
import "./Todo.css"
class Todo extends Component {
 
    render() {
        const withoutArea=<div role="list" class="ui divided relaxed list">
        <div role="listitem" class="item">
          <i aria-hidden="true" class="github large icon middle aligned"></i>
          <div class="content containerList">
              <div>
            <h1 class="header">{this.props.Data.title}</h1>
            <p class="description">{this.props.Data.time}</p>
            </div>
            <button class="ui icon button" onClick={()=>this.props.delete(this.props.Data.id)} >X</button>
            <button class="ui icon button" onClick={()=>this.props.edit(this.props.Data.id)} >e</button>
          </div>
        </div>
        </div>
        
        const withArea=<div role="list" class="ui divided relaxed list">
        <div role="listitem" class="item">
          <i aria-hidden="true" class="github large icon middle aligned"></i>
          <div class="content containerList">
              <div>
            <h1 class="header">{this.props.Data.title}</h1>
            <p class="description">{this.props.Data.time}</p>
            </div>
            <button class="ui icon button" onClick={()=>this.props.delete(this.props.Data.id)} >X</button>
            <div class="ui focus input"><input type="text" placeholder="Search..." /></div>
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