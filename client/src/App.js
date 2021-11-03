import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import HomePage from './HomePage';

const App = () => {
    return(
        <div>
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={HomePage} />
            </Router>
        </div>
    );
};

export default App;