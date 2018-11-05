import React from 'react';
import './ContainerMain.css';
import ArticleList from './ArticleList';
import Sidebar from './Sidebar';
import ArticleWithComments from './ArticleWithComments'
import { Route, Switch } from 'react-router-dom';

const ContainerMain = ({ currentUser }) => {
  return (
    <div className="container-main">
      <Switch>
        <Route path="/topics/:topic_slug/:article_id" render={(props) => <ArticleWithComments {...props} currentUser={currentUser}/>} />
        <Route path="/topics/:topic_slug/" render={(props) => <ArticleList {...props} currentUser={currentUser}/>} />
        <Route path="/" component={ArticleList} />
      </Switch>
      <Sidebar currentUser={currentUser}/>
    </div>
  )
};

export default ContainerMain;