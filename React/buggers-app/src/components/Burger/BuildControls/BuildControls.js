import React from "react";
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


//creating this constant so we can have an array to loop through it with mapping
//we can always access other stuffs from the file  
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong> </p>
         {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
             label={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}/* passing the addedIngredient property */
             removed ={() => props.ingredientRemoved(ctrl.type)} 
             disabled={props.disabled[ctrl.type]}/>
             
        ))}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);


export default buildControls;