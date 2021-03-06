import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

function Home({ userData, fetchUsers }) {
  useEffect(() => {
    if( !userData.user || userData.user.length === 0)
    fetchUsers();
  }, [fetchUsers, userData.user]);

  return (
    <div>
      {userData.user.map(user => 
        <div key={user.id}> {user.name} </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
