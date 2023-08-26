import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
    // ingredients is been received as props over here
    // this is to output our burger ingredients dynamically
    //the object of the burgerbuilder is been transformed into array because we cant map it
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return  <BurgerIngredient key={igKey + i} type={igKey} />;
            //i is simply 1, 2 , 3...
        });
    })/*reduce is a built-in array function which is used to transform an array into something else */
    .reduce((arr, el) =>{
        return arr.concat(el)
        //concat is used to add the current value to the initial
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return(<div className={classes.Burger}>
        
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};




export default burger;
//Object here is a javascript object which has a key method
//which extracts the keys of a given object and turns it into an array
// the next line of code is to transform the string value into an array with as many elements as we have inputs for a given object
// map(igKey => {
   /* return [...Array(props.ingredients[igKey])].map((_, i) => {
        return  <BurgerIngredient key={igKey + i} type={igKey} />;
          //i is simply 1, 2 , 3...
      });
  });*/
//}
//reduce is use to transform an array into something else
//it takes a function as an input which receives two arguments passed in automatically by js and also an initial value []
// arr-which is the previous value
//el-the new value