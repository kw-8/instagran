import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import LoginInputs from './inputs/login_inputs'

const mapStateToProps = state => {
  return ({
    user: {
      username: '',
      password: ''
    },
    formType: login,
    inputs: LoginInputs
  })
}

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);