import React from 'react';
import classes from './Input.css';

const input = (props)=>{
    let inputElement=null;

    const inputClasses = ['form-control mb-4'];
    if(!props.valid && props.shouldValidate && props.touched){
        inputClasses.push(classes.errorClass)
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                className={inputClasses.join(' ')} onChange={props.changed} />;
            break;
        case('textarea'):
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                className={inputClasses.join(' ')} onChange={props.changed} />;
            break;
        case('select'):
            inputElement = (<select 
                value={props.value} 
                className={inputClasses.join(' ')} onChange={props.changed}>
                    {props.elementConfig.options.map(option=>
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    )}
                </select>);
            break;
        default:
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                className={inputClasses.join(' ')} onChange={props.changed} />;
    }
    return(
        <div>
            <label style={{float:'left'}}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;