import React from 'react';
import {connect} from 'react-redux';
import {googleSignInStart, githubSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';

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
        const {emailSignInStart} = this.props
        const {email, password} = this.state;
        
        emailSignInStart(email, password);
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
        const {googleSignInStart, githubSignInStart} = this.props

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
}

const mapDispatchToProps = (dispatch)=>({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    githubSignInStart: ()=> dispatch(githubSignInStart()),
    emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);