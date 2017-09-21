import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formType === 'signup' ?
    {
      username: "",
      password: "",
      email: ""
    } :
    {
      username: "",
      password: ""
    };
  }

  componentWillMount() {
    this.props.clearSessionErrors();
  }

  handleDemoLogin() {
    return (e) => {
      e.preventDefault();
      if (this.props.match.url !== '/login') {
        this.props.history.push("/login");
        setTimeout(this.handleDemo.bind(this), 1000);
      } else {
        this.handleDemo();
      }
    };
  }

  handleDemo() {
    const username = Array.from("demo_user");
    const password = Array.from("123456");
    let that = this;
    const logInDemo = (wut) => {
      const demoInterval = setInterval(() => {
        if (username.length > 0) {
          const user = wut.state.username + username.shift();
          this.setState({username: user});
        } else if (password.length > 0){
          const pw = wut.state.password + password.shift();
          this.setState({password: pw});
        } else {
          const user = Object.assign({}, wut.state);
          clearInterval(demoInterval);
          this.props.processForm(user, 'signin');
        }
      }, 100);
    };
    logInDemo(that);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user, this.props.formType);
    };
  }

  handleCloseErrors() {
    return (e) => {
      e.preventDefault();
      this.props.clearSessionErrors();
    };
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors">
          <ul className="errors-ul">
            {
              this.props.errors.map((error, idx) => {
                return <li key={`error-${idx}`}>{error}</li>;
              })
            }
          </ul>
          <div className="close-btn-wrapper">
            <div onClick={this.handleCloseErrors()} className="close-btn">
              &times;
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    let display;
    let button;
    let message;
    let sub1;
    let sub2;
    let demoLogin;
    if(this.props.formType === 'signup') {
      button = 'Sign Up';
      display = (
        <input onChange={this.handleChange('email')} type="email" value={this.state.email} placeholder="Email"></input>
      );
      message = "Sign Up for Welp";
      sub2 = (<p className="subtle-text">Already on Welp? <Link to='/login'>Log in</Link></p>);
    } else {
      button = 'Log In';
      message = "Log In to Welp";
      sub1 = (<p className="subheader">New to Welp? <Link to='/signup'>Sign Up</Link></p>);
      demoLogin = (
      <button className="btn-primary" onClick={this.handleDemoLogin()}>Demo Login</button>);
    }
    return (
      <div className="session-container">
        <div className="session-body-responsive">
          <header className="session-header">
            <Link to="/">Welp</Link>
          </header>
          <div className="session-form-wrapper">
            {this.renderErrors()}
            <div className="session-form-container">
              <div className="column-1-2">
                <div className="session-form-container-left">
                  <h2>{message}</h2>
                  {sub1}
                  <form className="session-form">
                    <input ref="inputRef" onChange={this.handleChange('username')}
                      type="text"
                      value={this.state.username}
                      placeholder="Username"></input>
                    <input onChange={this.handleChange('password')}
                      type="password"
                      value={this.state.password}
                      placeholder="Password"></input>
                    {display}
                    <button className="btn-primary" onClick={this.handleSubmit()}>{button}</button>
                    {demoLogin}
                  </form>
                  {sub2}
                </div>
              </div>
              <div className="column-1-2">
                <div className="session-form-container-right">
                  <img src="https://res.cloudinary.com/jun/image/upload/v1505933693/signup_illustration_qw2im7.png" alt="Welcome Image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
