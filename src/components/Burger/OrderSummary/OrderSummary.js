import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                let content=null;
                if(this.props.ingredients[igKey] !==0){
                    content= (
                        <li key={igKey} className="list-group-item d-flex justify-content-between align-content-center align-items-center">
                        {igKey.toUpperCase()}
                        <span className="badge badge-primary badge-pill">{this.props.ingredients[igKey]}</span>
                    </li>
                    )
                }
                return content;
            } );

        return (
            <div>
                <div className={classes.headline}>
                    <span className={classes.summaryLabel}>Order Summary</span>
                    <span className={classes.priceLabel}>Total Price : ${this.props.price.toFixed( 2 )} </span>
                </div>
                <ul className='list-group'>
                    {ingredientSummary}
                </ul>
                <br />
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>
        );
    }
}

export default OrderSummary;