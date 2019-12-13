import React, {Component} from 'react';
import logo from './logo.svg';
import Input from 'antd/lib/input'
// import Button from 'antd/lib/button'
class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false
  }
  handleLogin = () => {
    const { username, password } = this.state
    
    if (username === "admin" && password === "admin") {
      localStorage.setItem('login', true);
      localStorage.setItem('username', "admin");
      window.location = "/Home"
    } else {
      this.setState({error: true})
    }

  }
  render() {
    return (
      <section className="login-section">
        <h4 className="login-title">Cypress testing app</h4>
        <Input id="username" className="_spacer-sm" onChange={e => this.setState({username: e.target.value})} />
        <Input.Password id="password" className="_spacer-sm" onChange={e => this.setState({password: e.target.value})}/>
        {this.state.error && <p className="error-message">Incorrect username and password</p>}
        <button id="login" className="_spacer-sm" onClick={this.handleLogin}> Login </button>
      </section>
    );
  }
}

export default Login;
