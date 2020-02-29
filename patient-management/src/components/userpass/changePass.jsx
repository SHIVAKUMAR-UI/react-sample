import React from "react";
import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import Form from "../common/form";
import Input from "../common/input";
import InputButton from "../common/inputButton";


class ChangePass extends Form {
  state = {
    data: {
      newPassword: "",
      reNewPassword: ""
    },
    errors: {}
  };

  schema = {
    newPassword: Joi.string()
      .required()
      .label("User Id"),
    reNewPassword: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
    //   await authenticate(this.state.data);
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
        <h3 className="text-center pt-5">Change Password</h3>
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form">
                <Input
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={data.newPassword}
                  onChange={this.onInputChange}
                  error={errors.newPassword}
                />
                <Input
                  label="Re-Enter Password"
                  name="reNewPassword"
                  type="password"
                  value={data.reNewPassword}
                  onChange={this.onInputChange}
                  error={errors.reNewPassword}
                />

                <InputButton name="Save" onClick={this.handleSubmit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePass;
