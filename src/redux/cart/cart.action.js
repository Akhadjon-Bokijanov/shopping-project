import {CartActions} from './cart.action.types'

export const toggleCartHidden = ()=>({
    type: CartActions.TOOGLE_CARD_HIDDEN
})

export const addItem = (item)=>({
    type: CartActions.ADD_ITEM,
    payload: item
})

export const removeItem = (item)=>({
    type: CartActions.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item)=>({
    type: CartActions.CLEAR_ITEM_FROM_CART,
    payload: item
})