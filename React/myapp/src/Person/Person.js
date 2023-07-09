//const person = function() {
// This synthax line of code is the same as the below one(called Es6 approach)
//}
import React from 'react';
//import Radium from 'radium'; commented out because we want to scoop our person.js with person.css whatever we defined in person.css wont overite styles in other component
 
//adding styling sheet(css) to our page with style sheet
import './Person.css';

const person = (props) => {
  /*adding media query with the help of radium// commenting out since we are romoving radium
  const style = {
      '@media (min-width: 500px)': {
        width: '450px'
      }
  }*/
return (
    //adding the className person to this div is to ensure my person.css file is not reassigned mistakenly to another file

    /*
    used because of radium
    <div className="Person" style={style}>
         <p onClick={props.click}>I'm a {props.name} and  I am {props.age} years old</p>
         <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name} //this is a two way binding which eneables us to the initial input data and the updating one
   />
 
 </div>*/
 <div className="Person">
 <p onClick={props.click}>I'm a {props.name} and  I am {props.age} years old</p>
 <p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name} //this is a two way binding which eneables us to the initial input data and the updating one
/>

</div>
)
};

export default person;
//export default Radium(person); still valid if we are using radium

//the props name is used to pass in the property of name and age{props.age}, {props.age}
//children is any element in between the opening tag and the closing tag of our component
// using media querys require extra wrapping the whole application with <styleRoot> first at the top withe the radium then the div of the app