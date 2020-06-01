import React from 'react';
import './customButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button { ...otherProps } className={`${isGoogleSignIn ? 'google-sign-in ' : ''} ${inverted ? 'inverted ' : ''} custom-button`}>
        {children}
    </button>
)

export default CustomButton;