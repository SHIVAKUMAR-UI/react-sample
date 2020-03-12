import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Input from "../common/input";
import InputButton from "../common/inputButton";
import Select from "../common/select";
import Form from "../common/form";
import WithModalPopup from "../common/withModalPopup";

import { createUser } from "../../services/UserService";

class User extends Form {
  state = {
    data: {},
    errors: {}
  };

  constructor(props) {
    super(props);
    // const address = this.getInitialAddress();
    this.state = {
      data: {
        firstName: "",
        middleName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        suite: "",
        city: "1",
        state: "1",
        country: "1",
        zipcode: ""
      },
      errors: {
        // address: address
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
      console.log("form data", this.state.data);
      //  await authenticate(this.state.data);
      createUser(this.state.data)
        .then(response => {
          toast.success("User Created Successfully!");
        })
        .catch(errorResponse => {
          toast.error("Creation Failed!");
        });
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
            lookup={[{ id: "1", name: "india" }]}
            value={data.country}
            onChange={this.onInputChange}
            error={errors.country}
          />
          <Select
            label="Province"
            name="province"
            lookup={[{ id: "1", name: "south" }]}
            value={data.province}
            onChange={this.onInputChange}
            error={errors.province}
          />
        </div>
        <div className="row">
          <Select
            label="City"
            name="city"
            lookup={[{ id: "1", name: "hyderabad" }]}
            value={data.city}
            onChange={this.onInputChange}
            error={errors.city}
          />
          <Input
            label="Zipcode"
            name="zipcode"
            type="text"
            value={data.zipcode}
            onChange={this.onInputChange}
            error={errors.zipcode}
          />
        </div>

        <InputButton name="Login" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default WithModalPopup(User);
