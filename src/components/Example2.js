import React, { Component } from 'react'
class Example2 extends Component {
    MyList(names){
        return names.map((name) => <h3 key={name}>{name}</h3>)
    }
  render() {
    return (
      <div>
         {this.MyList(this.props.x)}
         {/* {this.props.x.map((name) => (<h3 key={name}>{name}</h3>))} */}
      </div>
    )
  }
}

export default Example2
