import React from 'react';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    let login;
    let navbar;
    if(this.props.user) {
      login = <button type="button" onClick={this.props.handleLogout} className="btn btn-dark">Logout</button>
      navbar = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">Dashboard<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/inbox">Inbox<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/userinfo/:id">User Info<span className="sr-only">(current)</span></Link>
      </li>
      </ul>
      )
    } else {
      login = <Link to="/login" type="button"  className="btn btn-dark">Login</Link>
      navbar= null;
    }
    
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        
        <Link className="navbar-brand" to="/"><img src="https://image.flaticon.com/icons/svg/1293/1293034.svg" width="30" height="30" alt=""></img>TaskMaster 6000</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          
              {navbar}
          
            <span className="navbar-text">
              {login}            
            </span>

        </div>
      </nav>
    )
  };
};

export default Navigation;