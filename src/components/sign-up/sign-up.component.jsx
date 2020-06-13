import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


class SignUp extends React.Component {
    constructor()
    {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event)=> {
        event.preventDefault();

        const {displayName, password, confirmPassword, email} = this.state;
        const {signUpStartAscy} = this.props;

        if(password !== confirmPassword)
        {
            alert("Passwords do not match")
            return;
        }
        signUpStartAscy(email, displayName, password)   
    }

    handleChange = (event)=>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render()
    {
        const {email, password, displayName, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required />

                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required />

                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required />

                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required />
                    
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    signUpStartAscy: (email, displayName, password)=>dispatch(signUpStart({email, displayName, password}))
})

export default connect(null, mapDispatchToProps)(SignUp);