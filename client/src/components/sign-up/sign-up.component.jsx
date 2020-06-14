import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignUp = ({signUpStartAscy})=>{
    
    const [userData, setUserData] = useState({email: '', password: '', confirmPassword: '', displayName: ''})

    const handleSubmit = async (event)=> {
        event.preventDefault();

        const {displayName, password, confirmPassword, email} = userData

        if(password !== confirmPassword)
        {
            alert("Passwords do not match")
            return;
        }
        signUpStartAscy(email, displayName, password)   
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        });
    }


    const {email, password, displayName, confirmPassword} = userData;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required />

                <FormInput 
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label="Email"
                required />

                <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label="Password"
                required />

                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required />
                
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>({
    signUpStartAscy: (email, displayName, password)=>dispatch(signUpStart({email, displayName, password}))
})

export default connect(null, mapDispatchToProps)(SignUp);