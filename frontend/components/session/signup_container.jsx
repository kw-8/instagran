import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import SignupInputs from './inputs/signup_inputs'

const mapStateToProps = state => {
  return ({
    user: {
      username: '',
      password: ''
    },
    formType: 'signup',
    inputs: SignupInputs
  })
}

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);