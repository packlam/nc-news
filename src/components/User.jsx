import React from 'react';
import './User.css';
import userImg from '../media/user.png'

class User extends React.Component {
  state = {
    user: {}
  }

  render() {
    return (
      <div className="user">
        <div className="avatar">
          <img src={this.props.user.avatar_url} onError={e => {e.target.onerror = null; e.target.src=userImg}} alt={this.props.user.username}/>
        </div>
        <div>
          <p>{this.props.user.name}</p>
          <p>{this.props.user.username}</p>
        </div>
      </div>
    )
  }
}

export default User;