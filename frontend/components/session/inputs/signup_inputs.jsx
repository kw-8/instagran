import React from "react";

const SignupInputs = props => {
  return (
    <>
      {/* <label htmlFor="email">Email</label>
      <input id="email" type="text" onChange={props.update('email')} />
      
      <label htmlFor="full_name">Full Name</label>
      <input id="full_name" type="full_name" onChange={props.update('full_name')} /> */}
      
      <input id="username" type="text" placeholder="Username" onChange={props.update('username')} />
      <br />
      <input id="password" type="password" placeholder="Password" onChange={props.update('password')} />
    </>
  )
}

export default SignupInputs;