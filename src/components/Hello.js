import React from 'react';

function Hello(props){
    return(
        <div>
            <h1>Hello {props.name} {props.lastname}</h1>
        </div>
        
    )
}

export default Hello