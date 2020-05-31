import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
               <li><p>{this.props.Data.title}</p>  <button class="ui button" onClick={()=>this.props.delete(this.props.Data.id)} >X</button></li>
              
               </ul>
            </div>
        );
    }
}

export default Todo;