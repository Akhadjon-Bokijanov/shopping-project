import React from 'react';
import './shopping-cart-drop-down.styles.scss';
import CustomButton from '../customButton/customButton.component';

const ShoppingCartDropDown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default ShoppingCartDropDown;
