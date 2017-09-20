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
        <input onChange={this.handleChange('email')} type="email" value={this.state.email} placeholder="Email"></input>
      );
    } else {
      button = 'Log In';
      display = null;
    }
    return (
      <div className="session-container">
        <header className="session-header">
          <Link to="/">Welp</Link>
        </header>
        <div className="session-form-container">
          <div className="column-1-2">
            <div className="session-form-container-left">
              {this.renderErrors()}
              <form className="session-form">
                <h2>Log in to Yelp</h2>
                <p className="">New to Yelp? <Link to='/signup'>Sign up</Link></p>
                <input onChange={this.handleChange('username')}
                  type="text"
                  value={this.state.username}
                  placeholder="Username"></input>
                <input onChange={this.handleChange('password')}
                  type="password"
                  value={this.state.password}
                  placeholder="Password"></input>
                {display}
                <button onClick={this.handleSubmit()}>{button}</button>
                <button onClick={this.handleDemoLogin()}>Demo Login</button>
              </form>
            </div>
          </div>
          <div className="column-1-2">
            <div className="session-form-container-right">
              <img src="https://res.cloudinary.com/jun/image/upload/v1505933693/signup_illustration_qw2im7.png" alt="Welcome Image"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
