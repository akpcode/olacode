//const person = function() {
// This synthax line of code is the same as the below one(called Es6 approach)
//}
import React from 'react';
//adding styling sheet(css) to our page with style sheet
import './Person.css';

const person = (props) => {
return (
    //adding the className person to this div is to ensure my person.css file is not reassigned mistakenly to another file

    <div className="Person">
 <p onClick={props.click}>I'm a {props.name} and  I am {props.age} years old</p>
 <p>{props.children}</p>
  <input type="text" onChange={props.changed}nvalue={props.name} //this is a two way binding which eneables us to the initial input data and the updating one
   />
 
 </div>
)
};

export default person;

//the props name is used to pass in the property of name and age{props.age}, {props.age}
//children is any element in between the opening tag and the closing tag of our component