import React from 'react';
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
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
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
                    
                    <label htmlFor="">Email:</label>
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
                    <CustomButton type="submit">Sign in</CustomButton>
                    <button type="submit" name="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignIn;