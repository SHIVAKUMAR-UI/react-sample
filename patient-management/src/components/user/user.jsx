import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Input from "../common/input";
import InputButton from "../common/inputButton";
import Select from "../common/select";
import Form from "../common/form";
import WithModalPopup from "../common/withModalPopup";

class User extends Form {
  state = {
    data: {},
    errors: {}
  };

  constructor(props) {
    super(props);
    const address = this.getInitialAddress();
    this.state = {
      data: {
        firstName: "",
        middleName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        address: address
      },
      errors: {
        address: address
      }
    };
  }

  getInitialAddress() {
    return {
      suite: "",
      city: "",
      state: "",
      country: "",
      zipcode: ""
    };
  }

  schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    middleName: Joi.string()
      .required()
      .label("Middle Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    contactNumber: Joi.string()
      .required()
      .label("Contact Number"),
    email: Joi.string()
      .required()
      .label("Email"),

    suite: Joi.string()
      .required()
      .label("Suite"),
    city: Joi.string()
      .required()
      .label("City"),
    state: Joi.string()
      .required()
      .label("State"),
    country: Joi.string()
      .required()
      .label("Country"),
    zipcode: Joi.string()
      .required()
      .label("Zipcode")
  };

  doSubmit = async () => {
    try {
        console.log("form data",this.state.data);
      //  await authenticate(this.state.data);
      toast.success("User Created Successfully!");
    } catch (ex) {
      console.log(ex);
      toast.error("Creation Failed!");
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form>
        <div className="row">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            value={data.firstName}
            onChange={this.onInputChange}
            error={errors.firstName}
          />

          <Input
            label="Middle Name"
            name="middleName"
            type="text"
            value={data.middleName}
            onChange={this.onInputChange}
            error={errors.middleName}
          />
        </div>
        <div className="row">
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={data.lastName}
            onChange={this.onInputChange}
            error={errors.lastName}
          />
          <Input
            label="Contact Number"
            name="contactNumber"
            type="text"
            value={data.contactNumber}
            onChange={this.onInputChange}
            error={errors.contactNumber}
          />
        </div>
        <div className="row">
          <Input
            label="Email"
            name="email"
            type="email"
            value={data.email}
            onChange={this.onInputChange}
            error={errors.email}
          />
          <Input
            label="Suite"
            name="suite"
            type="text"
            value={data.suite}
            onChange={this.onInputChange}
            error={errors.suite}
          />
        </div>
        <div className="row">
          <Select
            label="Country"
            name="country"
            value={data.address.country}
            onChange={this.onInputChange}
            error={errors.address.country}
          />
          <Select
            label="Province"
            name="province"
            value={data.address.province}
            onChange={this.onInputChange}
            error={errors.address.province}
          />
        </div>
        <div className="row">
          <Select
            label="City"
            name="city"
            value={data.address.city}
            onChange={this.onInputChange}
            error={errors.address.city}
          />
          <Input
            label="Zipcode"
            name="zipcode"
            type="text"
            value={data.address.zipcode}
            onChange={this.onInputChange}
            error={errors.address.zipcode}
          />
        </div>

        <InputButton name="Login" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default WithModalPopup(User);
