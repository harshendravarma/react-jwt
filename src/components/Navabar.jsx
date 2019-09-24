import React, { Component } from "react";
import { BrowserRouter as  Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            TODO
          </a>
        
        <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">login <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="/admin">home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item active">
    <a className="nav-link" href="/logout">Logout<span className="sr-only">(current)</span></a>
  </li>
      </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
