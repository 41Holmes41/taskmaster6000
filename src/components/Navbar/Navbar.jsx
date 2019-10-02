import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        
        <Link class="navbar-brand" to="/"><img src="https://image.flaticon.com/icons/svg/1293/1293034.svg" width="30" height="30" alt=""></img>TaskMaster 6000</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">Dashboard<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inbox">Inbox<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/group/:id">Group Name<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/userinfo/:id">User Info<span class="sr-only">(current)</span></Link>
            </li>
          </ul>
            <span class="navbar-text">
           
            <button type="button" class="btn btn-dark">Logout</button>
            
            </span>

        </div>
      </nav>
    )
  };
};

export default Navigation;