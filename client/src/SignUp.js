import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleConfirmPassword = event => {
        this.setState({ confirmPassword: event.target.value });
    }

    signup = event => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: this.state.email, 
                password: this.state.password, 
                confirmPassword: this.state.confirmPassword 
            })
        };

        fetch("http://localhost:8000/signup", requestOptions)
            .then(res => {
                if(res.status !== 201) {
                    throw new Error("Error signing up user");
                } else {
                    this.setState({
                        login: true,
                        email: "",
                        password: "",
                        confirmPassword: ""
                    });
                }
            })
            .catch(err => console.log(err));
    }

    login = () => {
        this.setState({
            login: true
        });
    }

    render() {
        if(this.state.login) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <form className="login-form" noValidate>
                    <div className="form-control">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" id="email" onChange={this.handleEmail} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handlePassword} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onChange={this.handleConfirmPassword} />
                    </div>
                    <button className="loginButton" type="submit" onClick={this.signup}>Signup</button>
                    <button className="signupButton" type="submit" onClick={this.login}>I have an account</button>
                </form>
            </div>
        );
    }
}

export default Signup;
