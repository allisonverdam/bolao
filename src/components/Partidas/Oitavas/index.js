import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import withAuthorization from '../../Session/withAuthorization';
import { db } from '../../../firebase';

class OitavasPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      authenticatedUser: JSON.parse(localStorage.getItem('user'))
    }
  }

  componentDidMount(){
    const { userStore } = this.props;  

    db.onceGetUsers().then(snapshot =>
      userStore.setUsers(snapshot.val())
    );
    
  }

  render() {
    const { users } = this.props.userStore;

    return (
      <div>
        <h1>Oitavas de finais</h1>

        <h1>{this.state.authenticatedUser.username}</h1>

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>  
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('userStore'),
  observer
)(OitavasPage);