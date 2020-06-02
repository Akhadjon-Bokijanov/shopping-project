const addItemToCard = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    //console.log(cartItems);
    if(existingCartItem)
    {
        return cartItems.map((cartItem)=>
            cartItem.id===cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, cartItemToRemove)=>{
    
    if(cartItemToRemove.quantity ===1)
        return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id);
    else
        return cartItems.map((cartItem)=>
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            :  cartItem
        )

}
export default addItemToCard;
