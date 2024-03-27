import React from 'react'

const Button = () => {
  var myname = "ali"
  let adminq = () => {
    return "abc";
  }
  return (
    <>
      <button>Click This Button To Be a Expert</button>
      <button>{myname}</button>
      <p>Contact MR. {adminq()} for details</p>
    </>

  )
}

export default Button