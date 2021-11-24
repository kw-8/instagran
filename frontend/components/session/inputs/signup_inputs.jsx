import React from "react";

const SignupInputs = props => {
  return (
    <>
      <input id="email" type="text" placeholder="Email" onChange={props.update('email')} />
      <br />
      <input id="full_name" type="text" placeholder="Full Name" onChange={props.update('full_name')} />
      <br />
      <input id="username" type="text" placeholder="Username" onChange={props.update('username')} />
      <br />
      <input id="password" type="password" placeholder="Password" onChange={props.update('password')} />
    </>
  )
}

export default SignupInputs;