import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './styling/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false,
            loggedIn: false,
            email: "",
            password: ""
        };
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    login = event => {
        console.log(this.state.email, this.state.password)
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: this.state.email, 
                password: this.state.password, 
            })
        };
        fetch("http://localhost:8000/login", requestOptions)
            .then(res => {
                if(res.status !== 200) {
                    throw new Error("Error logging in user");
                } else {
                    this.setState({
                        loggedIn: true
                    });
                }
            })
            .catch(err => console.log(err));
    }

    signup = () => {
        this.setState({
            signup: true
        });
    }

    render() {
        if(this.state.signup) {
            return <Redirect to="/signup" />
        }
        if(this.state.loggedIn) {
            return <Redirect to="/home" />
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
                    <button className="loginButton" type="submit" onClick={this.login}>Login</button>
                    <button className="signupButton" type="submit" onClick={this.signup}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Login;
