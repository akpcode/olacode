import React from 'react';

const userInput = (props) => {
    //inline styling for my input value 
    //this ensures the styling is for input values alone
    const inputStyle = {
        border: '2px solid red'
    };
    //this is two ways binding
    return <input type="text" 
    style={inputStyle}
    onChange={props.changed} value={props.currentName}  />;
//two ways binding is set to allows us see our old username before changing it
};

export default userInput;