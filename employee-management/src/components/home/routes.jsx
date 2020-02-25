import React from "react";
import Home from "./home";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "../layout/error/notFound";
import Forgot from "../userpass/forgot";
import SetPass from "../userpass/setPass";
import ChangePass from "../userpass/changePass";
import User from "../user/user";
import Users from "../user/users";
import Patient from "../patient/patient";
import Patients from "../patient/patients";
import Dashboard from "../dashboard/dashboard";
import Configuration from "../configuration/configuration";
import Login from "../layout/login/login";

const GuardRoute = ({ component: Component }, ...rest) => {
  return (
      
  <Route {...rest} render={(props) => (
      <Component {...props} />
  )

  } />
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route component={Login} path="/login" />
      <GuardRoute component={Dashboard} path="/dashboard" />
      <GuardRoute component={Home} path="/home" />
      <GuardRoute component={Patients} path="/patients" />
      <GuardRoute component={Patient} path="/patient/:id" />
      <GuardRoute component={Users} path="/users" />
      <GuardRoute component={User} path="/user/:id" />
      <GuardRoute component={Configuration} path="/configuration/:id" />
      <GuardRoute component={ChangePass} path="/changepassword" />
      <Route component={SetPass} path="/setpassword" />
      <Route component={Forgot} path="/forgotpassword/:id" />
      <Route component={Home} path="/logout" />
      <Route component={NotFound} path="/not-found" />
      <Route component={Home} path="/" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
