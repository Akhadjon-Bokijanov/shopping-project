import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CardIcon from '../card-icon/cart-icon.component';
import ShoppingCartDropDown from '../shopping-cart-drop-down/shopping-cart-drop-down.component';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';  
import {connect} from 'react-redux';

const Header = ( {currentUser, hidden} ) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CardIcon />
        </div>
        {hidden ? null : <ShoppingCartDropDown />}
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);