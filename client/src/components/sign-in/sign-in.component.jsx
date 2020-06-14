import React, {useState} from 'react';
import {connect} from 'react-redux';
import {googleSignInStart, githubSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';

const SignIn =({emailSignInStart, googleSignInStart, githubSignInStart})=>
{
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    
    const {email, password} = userCredentials
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        emailSignInStart(email, password);
    }

    const handleChange = (event) =>
    {
        event.preventDefault();
        const {value, name} = event.target;

        setCredentials(
            {
                ...userCredentials,
                [name]: value
            }
        )
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = { handleSubmit }>
                
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    required onChange={handleChange}
                    label="Email"
                />
                
                <FormInput 
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton isGoogleSignIn type="button" onClick={googleSignInStart}>
                        Sign in with Google
                    </CustomButton>
                    <CustomButton isGoogleSignIn type="button" onClick={githubSignInStart}>
                        Sign in with GitHub
                    </CustomButton>
                </div>
                </form>
                
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    githubSignInStart: ()=> dispatch(githubSignInStart()),
    emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);