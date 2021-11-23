import React from "react";

const LoginInputs = props => {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={props.update('username')} />
      
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={props.update('password')} />
    </>
  )
}

export default LoginInputs;