import React, {useEffect} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {connect} from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-out/sign-in-sign-out.component';
import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'
import CheckOutPage from './pages/check-out/check-out.component';


const App =({checkUserSession, currentUser})=> {

  useEffect(()=>{
    checkUserSession()
  }, [checkUserSession]);
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/shop" component={ ShopPage }/>
        <Route path="/checkout" component={ CheckOutPage }/>
        <Route exact path="/signin" render={()=> currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
      </Switch>
      
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch=>({
  checkUserSession: ()=>dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
