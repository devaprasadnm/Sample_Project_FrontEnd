import React,{useContext} from 'react'
import {MyContext} from '../App'

function ComponentB() {
  
const data = useContext(MyContext)
  return (
    <div>
      <h1>{data}</h1>
        {/* <MyContext.Consumer>
            {
                data => {
                    return <h1>{data}</h1>
                }
            }
            </MyContext.Consumer> */}
        
    </div>
  )
}

export default ComponentB
