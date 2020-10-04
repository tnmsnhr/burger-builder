import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends Component {

    state = {
        controls:{
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
            password: {
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter Password',
                },
                value:'',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        isSignup: true
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

    inputChangedHandler = (event, controlName)=>{
        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }

        }

        this.setState({controls: updatedControls})
    }

    switchAuthModeHandler = ()=>{
        this.setState(prevState=>{
            return {isSignup: !prevState.isSignup}
        })
    }

    submitHandler = event =>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignup);
    }

    componentDidMount(){
        console.log('Auth Redirect Path',this.props.authRedirectPath)
        console.log('Building prop',this.props.building)
        if(!this.props.building && this.props.authRedirectPath !='/'){
            this.props.onSetAuthRedirectPath('/')
        }
    }
    

    render(){
        const formElementsArray = [];
        for(let element in this.state.controls){
            formElementsArray.push({
                id: element,
                config: this.state.controls[element]
            })
        }

        let authRedirect = null;

        if(this.props.token){
            console.log(this.props.authRedirectPath)
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        const form = formElementsArray.map(formElement=>(
            <Input 
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                key={formElement.id}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                valid = {formElement.config.valid}/>
        ))

        let formData = (
            <div>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <hr/>
                <Button 
                    btnType="Danger"
                    clicked={this.switchAuthModeHandler}
                    >SWITCH TO {this.state.isSignup?'SIGNIN':'SIGNUP'}</Button>
            </div>
        )

        let errorMessage = null;
        if(this.props.error){
            errorMessage= (<p>{this.props.error.message}</p>)
        }

        if(this.props.loading){
            formData = <Spinner />
        }

        return(
            <div className={[classes.Auth, 'jumbotron'].join(' ')}>
                {authRedirect}
                {errorMessage}
               {formData}
            </div>
        )
    }
};

const mapStateToProps = state =>{
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token,
        building: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onAuth: (email, password, isSignup)=>dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: (path)=>dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);