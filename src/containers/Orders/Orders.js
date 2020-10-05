import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Orders.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Orders extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        this.props.onFetchOrders(token,this.props.userId)
    }

    render() {
        let orderData = this.props.orders.map(order=>(
            <Order 
                key={order.id}
                price={order.price}
                ingredients={order.ingredients}
                orderData={order.orderData}
                date={order.date}
            />
        ))

        if(this.props.loading){
            orderData = <Spinner />
        }
        return (
            <div className={classes.ordersPage}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className={["col-md-12", classes.orderHeading].join(' ')}>
                            <h3>Order History</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            {orderData}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state =>{
    return {
        orders: state.order.order,
        loading: state.order.loading,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onFetchOrders : (token, userId)=>dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));