import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList'
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ArticleWithComments from './components/ArticleWithComments'
import LoginPage from './components/LoginPage';

class App extends Component {
  state = {
    currentUser: {}
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <Navigation {...props} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>} />
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/topics" component={TopicList}/>
        <Route exact path="/topics/:topic_slug" component={ArticleList} />
        <Route exact path="/topics/:topic_slug/:article_id" render={(props) => <ArticleWithComments {...props} currentUser={this.state.currentUser}/>} />
        <Route exact path="/login" render={() => <LoginPage handleLogin={this.handleLogin}/>} />
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
