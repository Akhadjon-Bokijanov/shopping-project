import React from 'react';
//import './customButton.styles.scss';
import {CustomButtonContainer} from './customButton.styled';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;