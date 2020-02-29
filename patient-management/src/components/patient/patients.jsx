import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";
import InputButton from "../common/inputButton";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import PatientTableBody from "./patientTableBody";
import _ from "lodash";

class Patients extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    sortColumn: {}
  };

  componentDidMount() {
    const { userData } = this.props;
    if (!userData.user || userData.user.length === 0) this.props.getUsers();
    console.log("Users prop in componentDidMount", this.props);
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

  newUser = () => {};

  showPageWithIndex = index => {
    this.setState({ currentPage: index });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { userData } = this.props;
    const { sortColumn, pageSize, currentPage } = this.state;

    const sortedUsers = _.orderBy(
      userData.user,
      [sortColumn.path],
      [sortColumn.order]
    );

    const usersAfterPagination = paginate(sortedUsers, currentPage, pageSize);

    return (
      <div>
        <div className="row">
          <div className="col">
            <h2>Patients List</h2>
          </div>
          <div className="col text-right">
            <InputButton name="New Patient" onClick={this.newUser} />
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
          <PatientTableBody
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
export default connect(mapStateToProps, mapDispatchToProps)(Patients);
