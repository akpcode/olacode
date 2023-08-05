//import React from 'react';
//converting a component to a class-based component
// fragment here function the same way as aux, just need to wrap it around our jsx
import React, { Component, Fragment } from 'react';
//import Radium from 'radium'; commented out because we want to scoop our person.js with person.css whatever we defined in person.css wont overite styles in other component
 
//adding props type to person.js
import PropTypes from 'prop-types';

//aux is being used to wrap other jsx element to fufil js rule to render only one mother jsx
import Auxilliary from '../../../hoc/Auxilliary';

//Adding an Hoc to enable us use the css set up here in person file
// the withClass adds some wrapping div and css code to our file
import withClass from '../../../hoc/withClass';

//adding styling sheet(css) to our page with style sheet
import classes from  './Person.css';
import AuthContext from '../../../context/auth-context';
//const person = function() {
// This synthax line of code is the same as the below one(called Es6 approach)
//}
//const person = (props) => {
  //creating a new class instead of returning a function or having a function that you store in a variable or constant like the above code
  class Person extends Component {
    constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
    }
    // setting all other component to access our authContext for class based components

      static contextType = AuthContext;

    componentDidMount(){
      //this.inputElement.focud();
      this.inputElementRef.current.focus();
      //setting componentDidMount to be able to access authContext
      console.log(this.context.authenticated);
    }
    render () {
      console.log('[Person.js] rendering...');
      return (
      <Auxilliary>
      
        {this.context.authenticated ?( <p>Authenticated!</p>): (<p>Please log in</p>)}
       
        <p onClick={this.props.click}>
          I'm a {this.props.name} and  I am {this.props.age} years old</p>,
          <p key="02">{this.props.children}</p>,
          <input
            key="03"
            // ref{(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name} //this is a two way binding which eneables us to the initial input data and the updating one
          />    
        
      </Auxilliary>
      );
       }
    }

  /*adding media query with the help of radium// commenting out since we are romoving radium
  const style = {
      '@media (min-width: 500px)': {
        width: '450px'
      }
  }
   //setting error messages
  const rnd = Math.random();

  if ( rnd > 0.7 ) {
    throw new Error ( 'Something went wrong');
  }
  
  */
 


    //adding the className person to this div is to ensure my person.css file is not reassigned mistakenly to another file

    /*
    used because of radium
    <div className="Person" style={style}>
         <p onClick={props.click}>I'm a {props.name} and  I am {props.age} years old</p>
         <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name} //this is a two way binding which eneables us to the initial input data and the updating one
   />
 
 </div>*/
 // This communicate to react to check if the propTypes in this file are correct and throws a warning if there is an incorrect/wrongly used one
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
//export default Radium(person); still valid if we are using radium

//the props name is used to pass in the property of name and age{props.age}, {props.age}
//children is any element in between the opening tag and the closing tag of our component
// using media querys require extra wrapping the whole application with <styleRoot> first at the top withe the radium then the div of the app