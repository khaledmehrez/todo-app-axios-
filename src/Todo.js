import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
               <li><h1>{this.props.title}</h1>  <button class="ui button" onClick={()=>this.props.delete(this.props.id)} >X</button></li>
              
               </ul>
            </div>
        );
    }
}

export default Todo;