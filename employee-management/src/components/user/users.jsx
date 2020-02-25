import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';



class Users extends Component {
    state = {  }

    componentDidMount() {
        const { userData } = this.props;
        if( !userData.user || userData.user.length === 0 )
        this.props.getUsers();
        console.log('Users prop in componentDidMount', this.props);
        
    }

    render() { 
        const { userData } = this.props;
        return ( 
            <div>{userData && userData.user && userData.user.map(user => 
                <div key={user.id}> {user.name} </div>
              )}</div>
         );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(fetchUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);