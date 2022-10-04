import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#a">
          <img className= "logoHenry" src={Logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
          <span>   </span>
          Henry - Weather App
        </a>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
