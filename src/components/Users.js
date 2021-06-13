import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        <ul>
          Users!
<<<<<<< HEAD
          {users}
          <p>User count: {this.props.numberOfUsers}  </p>
=======
          <p> {this.props.users.map}</p>
>>>>>>> 7b1ad84ffeef7498b292aa55583ac409e00bcac9
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
<<<<<<< HEAD
  return { users: state.users, numberOfUsers: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
=======
  return { users: state.users }
}

// connect this component to Redux
export default connect()(Users);
>>>>>>> 7b1ad84ffeef7498b292aa55583ac409e00bcac9
