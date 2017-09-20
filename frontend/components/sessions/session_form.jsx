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
    if(this.props.formType === 'signup') {
      button = 'Sign Up';
      display = (
        <label>Email
          <input onChange={this.handleChange('email')} type="email" value={this.state.email}></input>
        </label>
      );
    } else {
      button = 'Sign In';
      display = null;
    }
    return (
      <div className="session-container">
        <header className="session-header">
          <Link to="/">Welp</Link>
        </header>
        <div className="session-form-container">
          {this.renderErrors()}
          <form className="session-form">
            <label>Username
              <input onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
            </label>
            <label>Password
              <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
            </label>
            {display}
            <button onClick={this.handleSubmit()}>{button}</button>
            <Link onClick={this.handleDemoLogin()} to='/'>Demo Login</Link>
          </form>
        </div>
      </div>
    );
  }
}
