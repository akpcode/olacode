import React from "react";
import'./UserOutput.css';

const userOutput = (props) =>{
   return (
    //div is used because it allows us sit multiple element next to each other
    <div className="UserOutput">
        <p> Username: {props.userName}</p>
        <p>Both in cash and wired transfer</p>
    </div>
   ); 
};

export default userOutput;