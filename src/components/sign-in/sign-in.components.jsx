import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

//This is a class because we need what the user types in
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        //Blocks default handling and lets us have control
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    //Dynamic for both name and password.  picks the name="" and uses it
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label="email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.email}
                        label="password"
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;