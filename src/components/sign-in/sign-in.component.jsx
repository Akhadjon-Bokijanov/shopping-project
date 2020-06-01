import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';

import {signInWithGoogle, signInWithGitHub, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }


    
    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: "",
                password: ""
            })
        }
        catch(error)
        {
            console.error("Sign in error: ", error);
            
        }

        
    }

    handleChange = (event) =>
    {
        event.preventDefault();
        const {value, name} = event.target;

        this.setState(
            {
                [name]: value
            }
        )
    }

    render()
    {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = { this.handleSubmit }>
                    
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        required onChange={this.handleChange}
                        label="Email"
                    />
                    
                    <FormInput 
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGitHub}>
                            Sign in with GitHub
                        </CustomButton>
                    </div>
                    </form>
                    
            </div>
        )
    }
}

export default SignIn;