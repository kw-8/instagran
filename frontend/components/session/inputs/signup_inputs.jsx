import React from "react";

const SignupInputs = props => {
  return (
    <>
      {/* <label htmlFor="email">Email</label>
      <input id="email" type="text" onChange={props.update('email')} />
      
      <label htmlFor="full_name">Full Name</label>
      <input id="full_name" type="full_name" onChange={props.update('full_name')} /> */}
      
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={props.update('username')} />
      
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={props.update('password')} />
    </>
  )
}

export default SignupInputs;