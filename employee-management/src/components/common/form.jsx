import { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  onInputChange = ({ currentTarget: input }) => {
    const { data, errors } = { ...this.state };
    const { name, value } = input;
    data[name] = value;
    const _errors = this.validateProperty(name, value, errors);
    this.setState({ data: data, error: _errors });
  };

  validateProperty = (name, value, errors) => {
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate({ [name]: value }, schema);
    if (error) errors[name] = error.details[0].message;
    else delete errors[name];
    return errors;
  };

  validateForm = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    const errors = {};
    if( result && result.error)
    result.error.details.map(
      detail => (errors[detail.path[0]] = detail.message)
    );
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    // if (!errors) return;
    this.doSubmit();
  };
}

export default Form;
