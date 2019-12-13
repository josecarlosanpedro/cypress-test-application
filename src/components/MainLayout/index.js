import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  state = {
    login: false
  }
  componentDidMount() {
    const isLogin = localStorage.getItem('login');
    if (isLogin) {
      this.setState({ login: true })
    }
  }
  render() {
    return (
      <section className="layout-section">
        {this.state.login ? 
        <div>
         <Header />
           <main className="content-section">{this.props.children}</main>
         <Footer />
         </div>
          :
          <main className="content-section">{this.props.children}</main>
        }
       
      </section>
    );
  }
}

export default Layout;
