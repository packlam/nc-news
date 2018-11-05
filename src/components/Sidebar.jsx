import React from 'react';
import TopicList from './TopicList';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ currentUser }) => {
  return (
    <div className="sidebar">
      <Link to={currentUser === {} ? '/create' : '/login'}>
        <div className="btn-create-post">Create Post</div>
      </Link>
      <TopicList />
    </div>
  )
}

export default Sidebar;