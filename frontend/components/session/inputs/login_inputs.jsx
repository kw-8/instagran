import React from "react";

const LoginInputs = props => {
  return (
    <>
      <input id="username" type="text" placeholder='Username' onChange={props.update('username')} />
      <br />
      <input id="password" type="password" placeholder='Password' onChange={props.update('password')} />
    </>
  )
}

export default LoginInputs;