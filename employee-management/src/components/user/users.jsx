import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";
import InputButton from "../common/inputButton";

class Users extends Component {
  state = {};

  componentDidMount() {
    const { userData } = this.props;
    if (!userData.user || userData.user.length === 0) this.props.getUsers();
    console.log("Users prop in componentDidMount", this.props);
  }

  newUser = () => {

  }

  render() {
    const { userData } = this.props;
    let tableIndex = 1;
    return (
      <div>
        <div className="row">
          <div className="col">
            <h2>Users List</h2>
          </div>
          <div className="col text-right">
            <InputButton name="New User" onClick={this.newUser}/>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.user &&
              userData.user.map(user => (
                <tr key={user.id}>
                  <th scope="row">{tableIndex++}</th>
                  <td>{user.name} </td>
                  <td>{user.email} </td>
                  <td>{user.phone} </td>
                  <td>
                    {user.address && (
                      <div>
                        <span>
                          {user.address.street}, {user.address.suite},{" "}
                          {user.address.city}, {user.address.zipcode}
                        </span>
                      </div>
                    )}{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
