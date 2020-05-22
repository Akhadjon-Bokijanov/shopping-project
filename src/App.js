import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in/sign-in.component';
import {auth} from '../src/firebase/firebase.utils';


class App extends React.Component {

  constructor()
  {
    super()

    this.state = {
      currentUser: ''
    }
  }

  componentDidMount()
  {
    auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }

  render()
  {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ ShopPage }/>
          <Route path="/signin" component={ SignInSignUp }/>
        </Switch>
      </div>
    );
}

export default App;
