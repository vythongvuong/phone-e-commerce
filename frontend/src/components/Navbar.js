import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import user from './img/user.png';
import { ButtonContainer } from './Button';
import './css/nav.scss'
import './css/container.scss'
import './css/button.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="container">
          <div className="left-content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" />
              </Link>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search">
              <div className="search-content">
                <input type="text" className="search-input"/>
                <button className="button-search" onClick="" />
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="sign-in">
              <img className="profile-icon" src={user} alt="User" />
              <span className="text-sign-in">Register / Sign in</span>
            </div>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus"></i>
                </span>
                My Cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

