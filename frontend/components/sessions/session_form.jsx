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
      const demoUser = {
        username: 'demo',
        password: '123456'
      };
      this.props.processForm(demoUser, 'signin');
    };
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

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => {
            return <li key={`error-${idx}`}>{error}</li>;
          })
        }
      </ul>
    );
  }

  render() {
    let display;
    let button;
    let message;
    let sub1;
    let sub2;
    if(this.props.formType === 'signup') {
      button = 'Sign Up';
      display = (
        <input onChange={this.handleChange('email')} type="email" value={this.state.email} placeholder="Email"></input>
      );
      message = "Sign Up for Welp";
      sub1 = null;
      sub2 = (<p className="subtle-text">Already on Yelp? <Link to='/login'>Log in</Link></p>);
    } else {
      button = 'Log In';
      display = null;
      message = "Log In to Welp";
      sub1 = (<p className="subheader">New to Welp? <Link to='/signup'>Sign Up</Link></p>);
      sub2 = null;
    }
    return (
      <div className="session-container">
        <header className="session-header">
          <Link to="/">Welp</Link>
        </header>
        <div className="session-body">
          <div className="session-form-container">
            <div className="column-1-2">
              <div className="session-form-container-left">
                {this.renderErrors()}
                <h2>{message}</h2>
                {sub1}
                <form className="session-form">
                  <input onChange={this.handleChange('username')}
                    type="text"
                    value={this.state.username}
                    placeholder="Username"></input>
                  <input onChange={this.handleChange('password')}
                    type="password"
                    value={this.state.password}
                    placeholder="Password"></input>
                  {display}
                  <button className="btn-primary" onClick={this.handleSubmit()}>{button}</button>
                  <button className="btn-primary" onClick={this.handleDemoLogin()}>Demo Login</button>
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
    );
  }
}
