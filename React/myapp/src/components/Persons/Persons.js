//import React from "react";
//converting a component to a class-based component
//import React, {Component} from 'react';

// extending a pureComponent which check for changes and render when there is one
import React, { PureComponent } from 'react';
import Person from './Person/Person';


//const persons = props => {
//creating a new class instead of returning a function or having a function that you store in a variable or constant like the above code
//adding this. to all occurance of props is also part of convertion
class Persons extends PureComponent {
    //Updating life-cycle selection
    //static getDerivedStateFromProps(props, state) {
  //      console.log('[Persons.js] getDerivedStateFromProps');
   //     return state;
   // }
   // this props can be used to update internal datas but isnt supported so should not be used
   // componentWillReceiveProps(props){
    //console.log('[Persons.js] componentWillReceiveProps', props);
   //};
   // this is good when we are only checking selected properties
   //if we are checking all, thrn pureComponents should be used imported from react at the top
    /*shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        // using shouldComponentUpdate for optimization and checking if there is changes in our props value
        if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
        return true; //the answer here determines if react should continue updating or not
    }else {
        return false;
    }
    // return true
}*/
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }
    // componentWillUpdate {

   // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    //cleaning up with lifecycle hook 
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    render () {
        console.log('[Persons.js] rendering...');
        // This is where our jsx is been returned
        return (this.props.persons.map( (person, index)  => {
        
            return (
             <Person 
                click={() => this.props.clicked(index)}
                 name={person.name} 
                 age={person.age}
                 key={person.id}
                 changed={(event) => this.props.changed( event, person.id)}
                
                 />
            );    
     }));

    }
 

};

export default Persons;