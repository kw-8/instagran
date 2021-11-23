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
    this.props.submitForm(user);
  }

  render() {
    const Inputs = this.props.inputs;
    const {formType} = this.props;

    let thisFormName;
    let otherFormName;
    let otherFormLink;
    if (formType==='signup') {
      thisFormName = 'Sign Up'
      otherFormName = 'Login';
      otherFormLink = '/';
    }
    else {
      thisFormName = 'Login';
      otherFormName = 'Sign Up';
      otherFormLink = '/signup'
    }
    return (
      <div id='session-form'>
        <div>
          <h1 className='logo'>Instagran</h1>
          <h3>{thisFormName}</h3>
          <form>
            <Inputs update={this.update}/>
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
          </form>
        </div>
        <div>
          <Link to={otherFormLink}>{otherFormName}</Link>
        </div>
      </div>
    )
  }
}

export default SessionForm;