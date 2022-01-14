import { login } from "../../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import LoginInputs from './inputs/login_inputs'

const mapStateToProps = state => {
  return ({
    user: {
      username: '',
      password: ''
    },
    formType: 'login',
    inputs: LoginInputs,
    errors: Object.values(state.errors.session)
  })
}

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);