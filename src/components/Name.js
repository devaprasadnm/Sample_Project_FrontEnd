import React, {Component} from 'react';

class Name extends Component {
    constructor(){
        super();
        this.state = {
            name: "Devaprasad"
        }
    }
    change(){
        this.setState({
            name: this.state.name==="Devaprasad" ? "Gayathri" : "Devaprasad"
        })
    }


    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={ () => this.change()}>Change Text</button>
            </div>
        );
    }
}

export default Name;