import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchUser } from "../redux";

import User from "./user";
import InputButton from "../common/inputButton";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import UserTableBody from "./userTableBody";
import { getAllActiveUsers } from "../../services/UserService";
import _ from "lodash";

class Users extends Component {
  state = {
    userData: {
      loading: false,
      user: {}
    },
    pageSize: 4,
    currentPage: 1,
    sortColumn: {},
    showUser: false
  };

  componentDidMount() {
    let { userData } = this.state;
    try {
      userData.loading = true;
      this.setState({ userData });
      getAllActiveUsers().then(
        response => {
          userData.loading = false;
          userData.user = response.data;
          this.setState({ userData });
        }
      ).catch(errorResponse => {
        userData.loading = false;
        userData.user = [];
        this.setState({ userData });
      });
      // const { userData } = this.props;
      // if (!userData.user || userData.user.length === 0) this.props.getUsers();
    } catch(ex) {

    }
    
    
  }

  raiseSort = path => {
    const { sortColumn } = this.state;
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.handleSort(sortColumn);
  };

  newUser = () => {
    let { showUser } = this.state;
    showUser = true;
    this.setState({ showUser });
  };

  closeUser = () => {
    let { showUser } = this.state;
    showUser = false;
    this.setState({ showUser });
  };

  showPageWithIndex = index => {
    this.setState({ currentPage: index });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { userData } = this.state;
    const { sortColumn, pageSize, currentPage, showUser } = this.state;

    const sortedUsers = _.orderBy(
      userData.user,
      [sortColumn.path],
      [sortColumn.order]
    );

    const usersAfterPagination = paginate(sortedUsers, currentPage, pageSize);

    return (
      <div>
        {showUser && (
          <User headerName="Create User" onClickClose={this.closeUser} />
        )}
        <div className="row">
          <div className="col">
            <h2>Users List</h2>
          </div>
          <div className="col text-right ">
            <InputButton name="New User" onClick={this.newUser} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th onClick={() => this.raiseSort("user.name")} scope="col">
                Name
              </th>
              <th onClick={() => this.raiseSort("user.email")} scope="col">
                Email
              </th>
              <th onClick={() => this.raiseSort("user.phone")} scope="col">
                Contact Number
              </th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <UserTableBody
            usersAfterPagination={usersAfterPagination}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </table>
        <Pagination
          totalLength={userData.user.length}
          onPaginationClick={this.showPageWithIndex}
          pageSize={pageSize}
          currentPage={currentPage}
        />
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
