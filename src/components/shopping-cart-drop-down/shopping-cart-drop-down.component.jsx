import React from 'react';
import './shopping-cart-drop-down.styles.scss';
import CustomButton from '../customButton/customButton.component';
import {connect} from "react-redux";
import CartItem from '../card-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'

const ShoppingCartDropDown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map((cartItem)=>
                (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(ShoppingCartDropDown);
