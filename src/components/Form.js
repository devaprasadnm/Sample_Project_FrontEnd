import React, { Component } from 'react';
import {Button,Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:""
         }
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
     <input placeholder="Username" onChange={this.UsernameHandler} />
        <input placeholder="Password" onChange={this.PasswordHandler} />
        <button>Submit</button>
      </div>
    )
  }
}

export default FormComponent
