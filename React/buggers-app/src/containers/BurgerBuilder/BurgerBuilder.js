import React, { Component } from "react";
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//creating a new const outside my class to give my ingredients prices
// INGREDIENT_PRICE is in capitals because we want the constant to be globally accessible
const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.8,
    bacon: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {
    //adding state to this component because its a stateful component

    // constructor (props){
      //  super(props);
      //  this.state = {...}

   // }
   state = {
    // in the state, the name is the key, value is the amount
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
             meat: 0
        },
        //setting base price
        totalPrice: 4,
        //setting when our purchased button should be active
        purchasable: false,
        purchasing: false

   }
   //Adding methods to use to edit our ingredients

   updatePurchaseState (ingredients) {
    //used to copy the ingredients into this method
  ;
    // this is used to convert the values of our ingredient into strings
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];   //this replaces/return the new value in place of the old one
        })
        .reduce((sum, el)  => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
   }
        addIngredientHandler = (type) => {
            //knowing the old count
            const oldCount = this.state.ingredients[type];
            //checking/calculating the updated count
            const updatedCount = oldCount + 1;
            //update the updated count
            const updatedIngredients = {
                //using spread operator to spread the old ingredient state into the new object we are creating
              ...this.state.ingredients  
            };
            updatedIngredients[type] = updatedCount;
            //updating the total price with the price of ingredients
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            //setting what should happen when new ingredient is added
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        }

        removeIngredientHandler = (type) => {
               //knowing the old count
               const oldCount = this.state.ingredients[type];
               //checking and setting our ingredient to be greater than 0 to avoid errors
               if (oldCount <= 0) {
                return;
               }
               //checking/calculating the updated count
               const updatedCount = oldCount - 1;
               //update the updated count
               const updatedIngredients = {
                   //using spread operator to spread the old ingredient state into the new object we are creating
                 ...this.state.ingredients  
               }
               updatedIngredients[type] = updatedCount;
               //updating the total price with the price of ingredients
               const priceDeduction = INGREDIENT_PRICES[type];
               const oldPrice = this.state.totalPrice;
               const newPrice = oldPrice - priceDeduction;
               //setting what should happen when new ingredient is added
               this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
               this.updatePurchaseState(updatedIngredients);
            }
        purchaseHandler = () => {
            this.setState({purchasing: true});
        }
        purchaseCancelHandler = () => {
            this.setState({purchasing: false});
        }
    render () {
            const disabledInfo = {
                ...this.state.ingredients
            };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0
            }
         // the function of the disabledinfo is to check {salad: true, meat: false, ....}
        return (
            <Auxilliary>
                <Modal visible={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls 
          /* passing the ingredient property to our build controls */
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable ={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
                        
            </Auxilliary>
        );
    }
}



export default BurgerBuilder;
//This line of code is used to pass the burger ingredients into the burger
//<Burger ingredients={this.state.ingredients} />
