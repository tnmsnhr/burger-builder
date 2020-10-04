import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import asyncComponent from './hoc/asyncComponents/asyncComponent';


const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
});

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders')
});

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth')
});

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup()
  }
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={asyncAuth} />
        <Redirect to ='/' />
      </Switch>
    )

    if(this.props.token){
      routes =(
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to ='/' />
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onTryAutoSignup: ()=>dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
