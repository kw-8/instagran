import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <>
        <h3>{this.props.formType}</h3>
        <form>
          <label>Username
            <input type="text" id="username"/>
          </label>
          <label>Password
            <input type="password" id="password" />
          </label>
        </form>
        <Link to="#">something</Link>
        <p>Have an account?
          <Link to="#"></Link>
        </p>
      </>
    )
  }
}