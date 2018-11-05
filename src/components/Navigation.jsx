import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import User from './User';
import logoutIcon from '../media/logout.png';

const Navigation = (props) => {
  return (
    <nav>
      <Link to="/"><span className="logo">nc-news</span></Link>
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