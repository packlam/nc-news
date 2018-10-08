import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import User from './User';
import logoutIcon from '../media/logout.png';

const Navigation = (props) => {
  const path = props.location.pathname.split('/');
  return (
    <nav>
      <ul>
        <Link to="/"><li><strong>nc-news</strong></li></Link>
        <li> : </li>
        <Link to="/topics"><li>topics</li></Link>
        {(path.length >= 3) && <li>/{path[2]}</li>}
      </ul>
      {!props.currentUser.username && <Link to="/login"><button className="login-button">Login</button></Link>}
      {props.currentUser.username &&
      <div className="logged-in-as">
        <User user={props.currentUser}/>
        <img className="logout-button" src={logoutIcon} alt="logout" onClick={props.handleLogout}/>
      </div>}
    </nav>
  )
}

export default Navigation;