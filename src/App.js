import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import "./App.css"
class App extends Component {
  state={todo:[],
         textInput:"",
        showText:true,
      textEdit:""}

  handlechange=(e)=>{
   let text=e.target.value
   this.setState({textInput:text})
console.log(this.state.textInput)
  }
  postList=()=>{
    let title=this.state.textInput
    let time=new Date().toLocaleString()
   
    
    axios.post(`http://localhost:4000/posts`, {  title,time})
    .then(res => {
      console.log(res);
      console.log(res.data.list);
    })
    window.location.reload(false);
  }
  delete=(i)=>{console.log(i)
    
    axios.delete(`http://localhost:4000/posts/${i}`)
    .then(res => {
      console.log(res);
      console.log(res.data.list);
      
    })
    window.location.reload(false);
  }
  handlechangeEdit=(e)=>{
 let textedit=e.target.value
 this.setState({textEdit:textedit})
 console.log(this.state.textEdit)
  }
  showeditInput=()=>{
    
    this.setState({showText:false})
   
    }
  edit=(j)=>{
    console.log(j)
    axios.put(`http://localhost:4000/posts/${j}`,{title:this.state.textEdit,time:new Date().toLocaleString()})
    .then(res => {
      console.log(res);
      console.log(res.data.list);
      
    })
    window.location.reload(false);
  }

  
  componentDidMount(){
    axios.get(`	http://localhost:4000/posts`)
    .then(res => {
      
      
      this.setState({ todo:res.data});
      
    })
    
  }
  render() {
    console.log(this.state.todo)
    
    return (
      <body>
      <div class="principal">
          
        <div class="ui input segment">
          <input type="text" placeholder="add..." onChange={this.handlechange} />
          <button class="ui button" onClick={this.postList}>Click Here</button>
          </div>
        
       
        { this.state.todo.map(el => <Todo Data={el} delete={this.delete} edit={this.edit} handlechangeEdit={this.handlechangeEdit} showeditInput={this.showeditInput} showText={this.state.showText} />)}
      
      </div>
      </body>
    );
  }
}

export default App;
