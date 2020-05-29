import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
class App extends Component {
  state={todo:[],
         textInput:""}

  handlechange=(e)=>{
   let text=e.target.value
   this.setState({textInput:text})
console.log(this.state.textInput)
  }
  postList=()=>{
    let title=this.state.textInput
   
    
    axios.post(`http://localhost:3000/posts`, {  title})
    .then(res => {
      console.log(res);
      console.log(res.data.list);
    })
    window.location.reload(false);
  }
  delete=(i)=>{
    axios.delete(`http://localhost:3000/posts`)
    .then(res => {
      console.log(res);
      console.log(res.data.list);
      console.log(i)
    })
  }
  componentDidMount(){
    axios.get(`	http://localhost:3000/posts`)
    .then(res => {
      
      
      this.setState({ todo:res.data});
      
    })
    
  }
  render() {
    console.log(this.state.todo)
    
    return (
      <div>
          
        <div class="ui input segment">
          <input type="text" placeholder="add..." onChange={this.handlechange} />
          <button class="ui button" onClick={this.postList}>Click Here</button>
          </div>
        
       
        { this.state.todo.map(el => <Todo title={el.title} id={el.id} delete={this.delete}/>)}
      
      </div>
    );
  }
}

export default App;
