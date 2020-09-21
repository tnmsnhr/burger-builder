import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {

    state={
        orderForm:{
                name: {
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name',
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Street Name',
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Zip',
                    },
                    value:'',
                    validation:{
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Country Name',
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your Email',
                    },
                    value:'',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                deliveryMethod: {
                    elementType:'select',
                    elementConfig:{
                        options:[{value:'Fastest', displayValue:'Fastest'},
                                 {value:'Cheapest', displayValue:'Cheapest'}  ]
                    },
                    value:'Fastest',
                    valid: true
                }
          },
        formIsValid: false
    }

    orderHandler = (event)=>{
        event.preventDefault();
        const currentDate= new Date();
        const date=currentDate.getFullYear() +'/'+currentDate.getMonth() +'/' + currentDate.getDate() + ' ' + currentDate.getHours()+':'+currentDate.getMinutes();
        const formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            date: date
            
        }

        this.props.onOrderBurger(order)
        
    }

    checkValidity = (value, rule)=>{
        let isValid = true;

        if(!rule){
            return true;
        }

        if(rule.required && rule){
            isValid = value.trim() !=='' && isValid;
        }

        if(rule.minLength){
            isValid = value.length >= rule.minLength && isValid;
            
        }

        if(rule.maxLength){
            isValid = value.length <= rule.maxLength && isValid;
        }
        return isValid;
    }

    imputChangedHandler = (event, identifier) =>{
        const updatedOrderForm = {...this.state.orderForm}
        console.log(updatedOrderForm)
        const updatedOrderFormElement = {...updatedOrderForm[identifier]}

        updatedOrderFormElement.value = event.target.value;
        updatedOrderFormElement.valid = this.checkValidity(updatedOrderFormElement.value, updatedOrderFormElement.validation)
        updatedOrderFormElement.touched = true;
        updatedOrderForm[identifier]=updatedOrderFormElement;
        
        let formValidation = true;
        for(let id in updatedOrderForm){
            formValidation = updatedOrderForm[id].valid && formValidation;
        }

        this.setState({orderForm:updatedOrderForm, formIsValid: formValidation})
    }

    render(){
        const formElementsArray = [];
        for(let element in this.state.orderForm){
            formElementsArray.push({
                id: element,
                config: this.state.orderForm[element]
            })
        }
        let form = (
            <div>
                <h5 className="card-header info-color white-text text-center py-4" style={{backgroundColor:'#703B09 !important'}}>
                <strong>Enter Details</strong>
                </h5>
                <form className="text-center border border-light p-5" onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement =>(
                        <Input 
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event)=>this.imputChangedHandler(event,formElement.id)}
                            key={formElement.id}
                            touched={formElement.config.touched}
                            shouldValidate={formElement.config.validation}
                            valid = {formElement.config.valid}/>
                    ))}
                    
                    <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
            </div>
        );
        if(this.props.loading){
            form=<Spinner />
        }
        return(
            <div className={[classes.ContactData,'jumbotron'].join(' ')}>
               {form}
            </div>
        );
    }
};

const mapStateToProps = state=>{
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: orderData=> dispatch(actions.purchaseBurger(orderData))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));