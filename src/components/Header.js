import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          React Football App
        </a>
      </header>
    );
  }
}

export default Header;
