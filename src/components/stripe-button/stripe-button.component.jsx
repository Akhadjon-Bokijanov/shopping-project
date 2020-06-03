import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GptAPHegu0Qn14DdJEULJFMh31MYYeAG4h4KWPpiTDlYDvoNVETfFFRpX13pAued1hZcXUBkSbMG8j7DW3GYuQ100QLbczgbm';

    const onToken = token=>{
        console.log(token);
        alert("Successful Payment");
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