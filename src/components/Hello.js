import React from 'react';

function Hello(props){
    function clickMe(){
        alert("Hello World")
    }
    return(
        <div>
            <h1>Hello {props.name} {props.lastname}</h1>
            <button onClick={clickMe}> Click Me </button>
        </div>
        
    )
}

export default Hello