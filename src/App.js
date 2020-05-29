import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-out/sign-in-sign-out.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {

  constructor()
  {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeAuth = null;

  componentDidMount()
  {
    this.unSubscribeAuth = auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user })
      createUserProfileDocument(user);
      //console.log(user)
    } )
  }

  componentWillUnmount()
  {
    this.unSubscribeAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ ShopPage }/>
          <Route path="/signin" component={ SignInSignUp }/>
        </Switch>
      </div>
    );
  }
}

export default App;
