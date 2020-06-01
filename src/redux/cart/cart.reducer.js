import {CartActions} from './cart.action.types';
import addItemToCard from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case CartActions.TOOGLE_CARD_HIDDEN: return {...state, hidden: !state.hidden};
        
        case CartActions.ADD_ITEM:  return { ...state, cartItems: addItemToCard(state.cartItems, action.payload)};
        
        default: return state;
    }
}

export default cartReducer;