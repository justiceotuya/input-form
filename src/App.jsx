import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './pages/form';
import Dashboard from './pages/dashboard';
import './App.css';

const App = () => (
    <Router>
        <Switch>
            <Route
                exact
                path="/"
                component={Form}
            />
            <Route
                exact
                path="/dashboard"
                component={Dashboard}
            />
        </Switch>
    </Router>
);

export default App;
