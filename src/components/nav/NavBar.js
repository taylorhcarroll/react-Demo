import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'


// an example is className="nav-link" to"/taco" but the link in NavBar.js must correspond to taco
class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }
  render() {

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/Location">Locations</Link></li>
            <li><Link className="nav-link" to="/Owner">Owners</Link></li>
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/animals">Animals</Link></li>
                <li><Link className="nav-link" to="/Employee">Employees</Link></li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
              </>
              : <li><Link className="nav-link" to="/login">Login</Link></li>}
            {/* <li><Link className="nav-link" to="/login">Login</Link></li> */}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);