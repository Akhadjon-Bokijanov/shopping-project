import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {connect} from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-out/sign-in-sign-out.component';
import {setCurrentUser} from './redux/user/user.actions';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {

  unSubscribeAuth = null;

  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth => {
        
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot =>{
          setCurrentUser
          ({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      }
      else
      {setCurrentUser(userAuth)}
    })
  }

  componentWillUnmount()
  {
    this.unSubscribeAuth();
  }

  

  render()
  {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ ShopPage }/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
