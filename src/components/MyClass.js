import React ,{ Component } from 'react';

class MyClass extends Component{
   
    render(){
        return(
            <div>
            <h2>{this.props.email}</h2>
            <button onClick={this.props.myclick}> Click Me </button>
            </div>
        )
    }
}

export default MyClass