import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Input from "../../common/input";
import InputButton from "../../common/inputButton";
import Form from "../../common/form";
import { authenticate } from "../../../services/AuthService";

class Login extends Form {
  state = {
    data: {
      userId: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    userId: Joi.string()
      .required()
      .label("User Id"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
     await authenticate(this.state.data);
      toast.success("Authenticated Successfully!");
    } catch (ex) {
      console.log(ex);
      toast.error("Authentication Failed!");
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div id="login">
        <h3 className="text-center pt-5">Login</h3>
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form">
                <Input
                  label="User Id"
                  name="userId"
                  type="text"
                  value={data.userId}
                  onChange={this.onInputChange}
                  error={errors.userId}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={this.onInputChange}
                  error={errors.password}
                />

                <InputButton name="Submit" onClick={this.handleSubmit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
