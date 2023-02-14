
import React from 'react'

function myFunc(names) {
    return names.map((name) => <h3 key={name}>{name}</h3>)
}


function Example(props) {
  return (
    <div >
      <h2>{myFunc(props.names)}</h2>
    </div>
  )
}

export default Example
