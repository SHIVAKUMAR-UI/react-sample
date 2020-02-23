import React from 'react';
import Home from './home';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../layout/error/notFound';
import Forgot from '../userpass/forgot';
import SetPass from '../userpass/setPass';
import ChangePass from '../userpass/changePass';
import User from '../user/user';
import Users from '../user/users';
import Patient from '../patient/patient';
import Patients from '../patient/patients';
import Dashboard from '../dashboard/dashboard';
import Configuration from '../configuration/configuration'
import Login from '../layout/login/login'


const Routes = () => {

    return (
        <Switch>
            <Route component={Login} path="/login" />
            <Route component={Dashboard} path="/dashboard" />
            <Route component={Home} path="/home" />
            <Route component={Patients} path="/patients" />
            <Route component={Patient} path="/patient/:id" />
            <Route component={Users} path="/users" />
            <Route component={User} path="/user/:id" />
            <Route component={Configuration} path="/configuration/:id" />
            <Route component={ChangePass} path="/changepassword" />
            <Route component={SetPass} path="/setpassword" />
            <Route component={Forgot} path="/forgotpassword/:id" />
            <Route component={Home} path="/logout" />
            <Route component={NotFound} path="/not-found" />
            <Route component={Home} path="/" />
            <Redirect to="/not-found" />
        </Switch>
    );
}

export default Routes;