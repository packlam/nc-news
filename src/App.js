import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './components/LoginPage';
import ContainerMain from './components/ContainerMain';

class App extends Component {
  state = {
    currentUser: {}
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <Navigation {...props} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>} />
        <Switch>
          <Route path="/login" render={() => <LoginPage handleLogin={this.handleLogin}/>} />
          <Route path="/" render={() => <ContainerMain currentUser={this.state.currentUser}/>} />
        </Switch>
      </div>
    );
  }

  handleLogin = (currentUser) => {
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({ currentUser: '' })
  }
}

export default App;
