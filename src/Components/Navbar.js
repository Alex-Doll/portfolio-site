import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-custom'>
        <div className='container'>
          <Link className='home-link link-custom' to='/'>
            Alex Doll
          </Link>
          <div>
            <Link className='link-custom' to='/projects'>
              Projects
            </Link>
            <Link className='link-custom' to='/about'>
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;