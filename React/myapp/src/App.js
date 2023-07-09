import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Moses', age: 28},
      {name: 'Ayo', age: 25},
      {name: 'Ade', age: 27}
    ],
    otherState: 'some other value'
  }

 // switchNameHandler = () =>{
  //this is a way of person value to our function
    switchNameHandler = (newName) =>{
    this.setState( {
      persons: [
        {name:  newName, age: 28},
        {name: 'Ayo', age: 25},
        {name: 'Ade', age: 26}
      ]
    })
  }
  nameChangedHandler = (event) =>{
    this.setState( {
      persons: [
        {name:  'Moe', age: 28},
        {name: event.target.value, age: 25},
        {name: 'Ade', age: 27 }
      ]
    })
  }
  

  render (){
    //inline stuyling with js
    //The style value are in parentises because its in jsx
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      boxShadow: '0 6px 8px',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
      <h1>Hi, I'm a Frontend Dev</h1>
   <p>This is really working</p>
   
   <button 
   style={style}
   onClick={() => this.switchNameHandler ('Moe!!')/*This is another way of passing data into our function, it work effeciently on small scale app .bind(this, 'Moe')*/}>Switch Name</button>
   <Person  
   name={this.state.persons[0].name} 
   age={this.state.persons[0].age}/>
   <Person
    name={this.state.persons[1].name} 
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this, 'Akapo!')} 
    changed= {this.nameChangedHandler}>My Hobbies: Travelling</Person>
   <Person 
   name={this.state.persons[2].name} 
   age={this.state.persons[2].age}/>
   </div>
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



// if we assign a function as a value, it becomes amethod
// defining a special propert with the name state(this allows props to be set and passed from outside the name) and only works in extends component
// the above htmlminput is not html, its jsx which allows us to write in html but runs in js and has restrictions.line7-9
// we had to use className in line 7 because of the restriction which is used to add a css class
    // The manual way of executing the above code is, the other part which has null is where the code is style by css. line 12