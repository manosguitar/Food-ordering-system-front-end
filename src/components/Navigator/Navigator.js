import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

export default class Navigator extends Component {
  render() {
    return (
      <div className="bg-dark shadow" >
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-myc text-light">
          <Logo />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collasde navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}
