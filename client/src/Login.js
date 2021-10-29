import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './styling/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false
        };
    }

    login = () => {

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
        return (
            <div>
                <form class="login-form" novalidate>
                    <div class ="form-control">
                        <label for="email">E-Mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class ="form-control">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button class="loginButton" type="submit" onClick={this.login}>Login</button>
                    <button class="signupButton" type="submit" onClick={this.signup}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Login;
