import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GptAPHegu0Qn14DdJEULJFMh31MYYeAG4h4KWPpiTDlYDvoNVETfFFRpX13pAued1hZcXUBkSbMG8j7DW3GYuQ100QLbczgbm';

    const onToken = token=>{
        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            }
        }).then(res=>{
            alert("Payment successful!");
        }).catch(error=>{
            console.log(error);
            alert("There is an issue with payment!");
        })
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Shopping-Project"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;