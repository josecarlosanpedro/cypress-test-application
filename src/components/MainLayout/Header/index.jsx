import React, { Component } from 'react';
// import Button from 'antd/lib/button'

import { withRouter } from 'react-router-dom';
class Header extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location = "/"
  }
  render() {

    const username = localStorage.getItem('username');
    return (
      <section className="header-section">
            {/* Sample testing application */}
            <span className="username">{username}</span>
            <button onClick={this.handleLogout} id="logout">Logout</button>
      </section>
    );
  }
}

export default withRouter(Header);
