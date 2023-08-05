// Updating a functional component life cycle can be maintained by importing useEffect from react, use state doesnt work for it
// useRef is imported to allow us use it in the code
import React, {useEffect, useRef, useContext} from "react";

import classes from './Cockpit.css';
import AuthContext from "../../context/auth-context";
import authContext from "../../context/auth-context";

//This is a functional component
const Cockpit = (props) => {
  // setting our toggle button to autoclicked using useRef
  const toggleBtnRef = useRef(null);

//useContext is used for functional component to pass data through components
const authContext = useContext(AuthContext);

console.log(authContext.authenticated);

    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        // can run http request in here which can only be done in the first time
        //faking a request

        //cleanup with useEffect
      // const timer = setTimeout(() => {
       //   alert ('Saved data to cloud!');
        // can also the effect to an empty array, which tells react the effect has no dependencies and should rerun whenever one of the dependencies changes 
        // }, [props.persons]); this will rerun since there is a dependency
      //},1000); 
      // cleaning up with useEffect which runs before useEffect runs 
      toggleBtnRef.current.click();
      return () => {
       // clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect')
      };

        // setting when useEffect should opperate
      }, []); //this wont rerun since the array is set to empty

      //useEffect(); can be use as many time as possible
    useEffect(()  => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      };
    });
      const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2){
      assignedClasses.push(classes.red ); // classes = ['red]
    }
    if (props.personsLength <= 1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
        
        <h1>{props.title /* Accesing the props title set in app and index.js*/}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button ref={toggleBtnRef}
        className={btnClass}

            //style={style} using pseudo selector since we unlock our css module
             onClick={props.clicked/*This is another way of passing data into our function, it work effeciently on small scale app .bind(this, 'Moe')*/}>
              Toggle Persons
              </button>
          
             <button onClick={authContext.login}>
                 Log in 
              </button>
           
   </div>
    );
};

//Wrapping our export with react memo to optimize the cockpit rendering to when on only changes happen to it and not rerender everytime
export default React.memo(Cockpit);