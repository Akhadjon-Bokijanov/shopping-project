import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CardIcon from '../card-icon/cart-icon.component';
import ShoppingCartDropDown from '../shopping-cart-drop-down/shopping-cart-drop-down.component';
import {HeaderContainer, OptionLink, LogoConatiner, OptionsContainer} from './header.styled';
import { auth } from '../../firebase/firebase.utils';  
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


const Header = ( {currentUser, hidden} ) => (
    <HeaderContainer>
        <LogoConatiner to="/">
            <Logo className="logo" />
        </LogoConatiner>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            
            {
                currentUser ? 
                <OptionLink as="div" onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CardIcon />
        </OptionsContainer>
        {hidden ? null : <ShoppingCartDropDown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);