import React from "react";
import { Link } from "react-router-dom";
import { removeSessionErrors } from "../../actions/session_actions";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
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
    if (this.props.formType === 'login') {
      this.props.submitLoginForm(user);
    } else {
      this.props.submitSignupForm(user);
    }
  }

  render() {
    const Inputs = this.props.inputs;
    const {formType} = this.props;

    let thisFormName;
    let otherFormName;
    let otherFormText;
    let otherFormLink;
    if (formType==='signup') {
      thisFormName = 'Sign Up'
      otherFormName = 'Login';
      otherFormText = 'Have An account? ';
      otherFormLink = '/';
    }
    else {
      thisFormName = 'Login';
      otherFormName = 'Sign Up';
      otherFormText = 'Don\'t have an account? ';
      otherFormLink = '/signup'
    }
    // debugger
    return (
      <div id='session-form' className={formType}>
        <div>
          <h1 className='logo'>Instagran</h1>
          <form>
            <Inputs update={this.update}/>
            <br />
            <button onClick={this.handleSubmit}>{thisFormName}</button>
          </form>
          <div className="session-errors">
            <p>{this.props.errors ? this.props.errors.map(error => <li>{error}</li>) : null}</p>
          </div>
            <form>
            <button className='demo-login' onClick={() => this.props.submitLoginForm({username: 'super_grandma', password: 'supersuper'})}>Login with super_grandma</button>
          </form>
        </div>
        <div>
          {otherFormText}
          <Link to={otherFormLink} onClick={() => dispatch(removeSessionErrors())}>{otherFormName}</Link>
        </div>
      </div>
    )
  }
}

export default SessionForm;