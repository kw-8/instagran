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
    return (
      <div id='session-form' className={formType}>
        <div>
          <h1 className='logo'>Instagran</h1>
          <form>
            <Inputs update={this.update}/>
            <br />
            <button onClick={this.handleSubmit}>{thisFormName}</button>
          </form>
          <form>
            <button className='demo-login' onClick={() => this.props.submitForm({username: 'super_grandma', password: 'supersuper'})}>Login with super_grandma</button>
          </form>
        </div>
        <div>
          {otherFormText}
          <Link to={otherFormLink}>{otherFormName}</Link>
        </div>
      </div>
    )
  }
}

export default SessionForm;