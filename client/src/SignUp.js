import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
    }

    signup = () => {

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
                <form class="login-form" novalidate>
                    <div class ="form-control">
                        <label for="email">E-Mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class ="form-control">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div class="form-control">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                    </div>
                    <button class="loginButton" type="submit" onClick={this.signup}>Signup</button>
                    <button class="signupButton" type="submit" onClick={this.login}>I have an account</button>
                </form>
            </div>
        );
    }
}

export default Signup;
