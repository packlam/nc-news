import React from 'react';
import './LoginPage.css';
import * as api from '../api';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  state = {
    username: '',
    loginSucess: false,
    err: null
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <label>
            <strong>Username:</strong>
            <input className="login-box" type="text" value={this.state.username} onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="login-button" onClick={this.handleClick}>Login</button>
            {this.state.loginSucess && <Redirect to="/" />}
            {this.state.err && <p>User {this.state.username} does not exist</p>}
          </label>
        </form>
      </div>
    )
  }

  handleChange = (username) => {
    this.setState({ username, err: null })
  }

  handleClick = (e) => {
    e.preventDefault()
    api.getUserByUsername(this.state.username)
    .then(user => {
      this.props.handleLogin(user)
      this.setState({ loginSucess: true })
    })
    .catch((err) => this.setState({ err }))
  }
}

export default LoginPage;