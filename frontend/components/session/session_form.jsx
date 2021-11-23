import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const Inputs = this.props.inputs;
    return (
      <>
        <h3>{this.props.formType}</h3>
        <form>
          <Inputs update={this.update} handleSubmit={this.handleSubmit}/>
        </form>
      </>
    )
  }
}

export default SessionForm;