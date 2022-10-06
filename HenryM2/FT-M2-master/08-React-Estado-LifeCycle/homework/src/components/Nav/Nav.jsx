import React from 'react';
import Logo from './logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {NavLink, Link} from 'react-router-dom';
//import About from '../About/About.jsx';

function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'>
          <span class="navbar-brand">
            <img className= "logoHenry" src={Logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            <span> </span>
            Henry - Weather App
          </span>
          </Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to='/about' className="about">
                <span class="nav-item nav-link">About Me</span> 
            </NavLink>
          </div>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
