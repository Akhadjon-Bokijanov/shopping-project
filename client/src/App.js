import React, {useEffect, lazy, Suspense} from 'react';
import {connect} from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'
import {GlobalStyles} from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(()=>import("./pages/homepage/homepage.component"))
const ShopPage = lazy(()=>import('./pages/shop/shop.component'))
const SignInSignUp = lazy(()=>import('./pages/sign-in-sign-out/sign-in-sign-out.component'))
const CheckOutPage = lazy(()=>import('./pages/check-out/check-out.component'))

const App =({checkUserSession, currentUser})=> {

  useEffect(()=>{
    checkUserSession()
  }, [checkUserSession]);
  
  return (
    <div className="App">
      <GlobalStyles />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={ HomePage }/>
              <Route path="/shop" component={ ShopPage }/>
              <Route path="/checkout" component={ CheckOutPage }/>
              <Route exact path="/signin" render={()=> currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
            </Suspense>
          </ErrorBoundary>
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
