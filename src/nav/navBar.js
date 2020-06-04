import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <div id="background"></div>
        <h1 className="site-title">Savant Athenaeum</h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/books">Books</Link></li>
            <li><Link className="nav-link" to="/patrons">Patrons</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;


// <img id="image-library" src={require("./Library.jpg")} alt="Library" />