import React from 'react';
import classes from './Order.css';

const Order = (props)=> {

    const fetchedIngredients =[];
    for(let ingredientname in props.ingredients){
        fetchedIngredients.push({
            name: ingredientname,
            amount: props.ingredients[ingredientname]
        })
    }
    return (
        <div className={classes.Order}>
            <div className="container-fluid">
                <div className={['row', classes.mainArea].join(' ')}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className={classes.singleOrder}>
                            <div className="row">
                                <div className='col-md-6'>
                                    <img src="https://m.economictimes.com/thumb/msid-72863458,width-1200,height-900,resizemode-4,imgsize-731189/burger-thnkstck.jpg" className="img-thumbnail" alt="Cinque Terre" width="100" height="236" />
                                    <h6>Name: {props.orderData.name}</h6>
                                    <p><span style={{fontWeight:'bold'}}>Email:</span> {props.orderData.email}</p>
                                    <p><span style={{fontWeight:'bold'}}>Ingredients: </span> 
                                        {fetchedIngredients.map(item=>
                                        <span className={classes.ingredients} style={{textTransform:'capitalize'}} key={item.name}> {item.name}({item.amount}) </span>)}</p>
                                    <p><span style={{fontWeight:'bold'}}>Address: </span> {props.orderData.street}, 
                                                {props.orderData.zipCode}, 
                                                {props.orderData.country}</p>
                                </div>
                                <div className="col-md-2">
                                    <h5 style={{fontWeight:'bold'}}>$ {props.price.toFixed(2)}</h5>
                                </div>
                                <div className={['col-md-4', classes.restInfo].join(' ')}>
                                    <p style={{fontWeight:'bold'}}><span className={classes.dot}></span>  Order Placed: {props.date}</p>
                                    <p>Delivery Method: {props.orderData.deliveryMethod}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md-1">
                    <i style={{color:'#130C53', cursor:'pointer'}} className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Order;
