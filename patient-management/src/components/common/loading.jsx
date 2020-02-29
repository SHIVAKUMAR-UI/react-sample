import React from "react";
import { connect } from "react-redux";

function Loading({ userData }) {
  return (
    <React.Fragment>
      {!userData.loading || (
          <button className="btn btn-primary loading" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      )}
    </React.Fragment>
  );
}

const mapStateToProp = state => {
  return {
    userData: state.user
  };
};

export default connect(mapStateToProp)(Loading);
