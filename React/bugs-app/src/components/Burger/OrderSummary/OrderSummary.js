import React from "react";
import Auxilliary from '../../../hoc/Auxilliary';
import { IgnorePlugin } from "webpack";

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following imgredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxilliary>
    );
};

export default orderSummary;