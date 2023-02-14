import React, { Component } from 'react';
import {Button,Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
            data:[]
         }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => this.setState({data:json}))
    }

    UsernameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    PasswordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
// console.log(this.state.username);
// console.log(this.state.password);
  render() {
    return (
      <div>
     <input placeholder="Username" value={this.state.username} onChange={this.UsernameHandler} />
        <input placeholder="Password" onChange={this.PasswordHandler} />
        <button>Submit</button>
        <h3>{this.state.data.map((d) => (<p>{d.id} {d.title}</p> ))}</h3>
      </div>
    )
  }
}

export default FormComponent
