import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import { removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import SignupInputs from './inputs/signup_inputs'

const mapStateToProps = state => {
  return ({
    user: {
      username: '',
      password: ''
    },
    formType: 'signup',
    inputs: SignupInputs,
    errors: Object.values(state.errors.session)
  })
}

const mapDispatchToProps = dispatch => ({
  submitSignupForm: user => dispatch(signup(user)),
  submitLoginForm: user => dispatch(login(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);