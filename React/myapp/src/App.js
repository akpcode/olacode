import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';//this is installed in the terminal then imported in other to allow us use pseudo selector in our inline styling
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'n1', name: 'Moses', age: 28},
      { id: 'n2', name: 'Ayo', age: 25},
      { id: 'n3', name: 'Ade', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false
  }

/*
This is being called from person.js so its being called  // switchNameHandler = () =>{
  //this is a way of adding person value to our function
    switchNameHandler = (newName) =>{
    this.setState( {
      persons: [
        {name:  newName, age: 28},
        {name: 'Ayo', age: 25},
        {name: 'Ade', age: 26}
      ]
    })
  }*/
  nameChangedHandler = (event, id ) =>{
     //updating the state only for the person into which input field we typed
     //finding the person is the next line of code which is reaching out to the state and calling find
     const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
     });
    //the person can be get by accessing the element we fetched out from the id above
  // instead of mutating the object direct, we create a new js object and then use spread operator in cont nxt line
  // front of the object we are fetching which will distribute all the properties of the object we fetch into this new one we are creating 
    const person = { 
      ...this.state.persons[personIndex]
    };

    //another approach to the above without spread operator is to use object assign a default js function
    // were we pass an empty object as the first argument and then the object which properties we want to assign into it as the second argument
    //const person = Object.assign({}, this.state.persons[personIndex]);
   
    //updating the person name
    person.name = event.target.value;

    //updating the array
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      
  this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    /*const persons = this.state.persons; /*this is to fetch all my persons*/
    /*slice() slice like this copies full array and returs new one which is stored in the element.this is to be done before manipulating our element*/
   //Another approach to this is to use es6 feature (the spread operator)
  // const persons = this.state.persons.slice(); this copies the full array and return a new one which is the store.
  const persons = this.state.persons;
   //const persons = [...this.state.persons];
    persons.splice(personIndex, 1);      /* creating another version of the person, the splice is use to remove elemnts*/
    this.setState({person: persons});   /*setting the person to persons which was just updated after removing an element from it*/


  }

  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});/*This is setting show persond to what doesShow is not*/
  /* if does show is true, showPersons will be false*/
  } 

  render (){
    //inline styling with js and also variables
    //The style value are in parentises because its in jsx
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      boxShadow: '0 6px 8px',
      padding: '8px',
      cursor: 'pointer',
      /* radium enity
      ':hover': {//all psuedo selector must be inputed like this in jsx
        backgroundColor: 'lightgreen',
        color: 'black'
      }*/
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (

     <div>
        {this.state.persons.map((person, index) => {
          return <Person /*this is to return the vanila js into jsx so the array gets mapped*/
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}   
         key= {person.id}
         changed={ (event) => this.nameChangedHandler(event, person.id)} />
        })
        /*using single currly brace to render content. using mapping to convert the js invalid arrays to valid using vanilla js
        Map is able to achieve this by executing a method on every given element in a given array*/ }   
      
          </div>
      );
      style.backgroundColor = 'red';
      //overiding the formal button styling 
      /* radium entity
      style[':hover'] = 
      {
        backgroundColor: 'salmon',
        color: 'black'
      };*/
    }
    //setting my className dynamically in respect to persons
    //creating a new variable (can use let, var and const. using const because we are never assigning another value)
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red' ); // classes = ['red]
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
  // <StyleRoot>
     <div className="App">
       <h1>Hi, I'm a Frontend Dev</h1>
        <p className={classes.join(' ')}>This is really working</p>
   
            <button 
            style={style}
             onClick={ this.togglePersonsHandler /*This is another way of passing data into our function, it work effeciently on small scale app .bind(this, 'Moe')*/}>Toggle Persons</button>
             {persons}   
         </div>
   // </StyleRoot>
    );
  }
}




 





/*//using react hooks( React hook is basically a collection of functions exposed to me bt react which can be use in functional components)

const app = props =>{
//const stateArr = useState this is use to extract element from the array we get bak from the right side
const [this.state, setthis.state] = useState({
  persons: [
    {name: 'Moses', age: 28},
    {name: 'Ayo', age: 25},
    {name: 'Ade', age: 28}
  ],
  otherState: 'some other value'
}); 

// in other to always merge our old data with the new one, we need to use state multiple times
console.log(this.state);

 const switchNameHandler = () => {
  // console.log('Was clicked!');
  //This line of code shouldnt be executed like thisthis.state.persons[0].name = 'mo';
 // setState help us to update the property state
 setthis.state({
   persons: [
   {name: 'Mos', age: 28},
   {name: 'Ayo', age: 25},
   {name: 'Ade', age: 27}

 ],
 otherState: this.state.otherState
 
 });
};

/*class App extends Component {
  // thinking of property as a variable of class
  state = {
    persons: [
      {name: 'Moses', age: 28},
      {name: 'Ayo', age: 25},
      {name: 'Ade', age: 28}
    ],
    otherState: 'some other value'
  }
 
  } 


  render() {}
    return (
      <div className="App">
         <h1>Hi, I'm a Frontend Dev</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Travelling</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  
}
*/
//the app here is exported in small letter since my function is declared in small letter
export default App;
//export default Radium(App);


// if we assign a function as a value, it becomes amethod
// defining a special propert with the name state(this allows props to be set and passed from outside the name) and only works in extends component
// the above htmlminput is not html, its jsx which allows us to write in html but runs in js and has restrictions.line7-9
// we had to use className in line 7 because of the restriction which is used to add a css class
    // The manual way of executing the above code is, the other part which has null is where the code is style by css. line 12
    // code to install radius [ npm install --save radium]