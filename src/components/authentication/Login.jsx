import React, { Component } from "react";
import authenticationService from "../../Services/AuthenticationService";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  constructor(props) {
    super();
    let loggedIn = false;
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    //this.props.history.replace('/admin');
    //username:javainuse
    //password:password
    authenticationService.login(
      this.refs.username.value,
      this.refs.password.value
    );
    this.props.history.replace("/admin");
  };
  render() {
    return (
      <div className="container">
        <div className="">
          <h1>login</h1>
          <form onSubmit={this.submitForm}>
            <div className="card .mx-auto text-center">
              <input
                type="text"
                placeholder="username"
                name="username"
                ref="username"
                className="form-control"
                value={this.state.username}
                onChange={this.onChange}
              ></input>
              <br />
              <input
                type="password"
                placeholder="password"
                name="password"
                ref="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChange}
              ></input>
              <br />
              <input type="submit" className="btn btn-primary"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
