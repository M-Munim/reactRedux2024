import React from 'react'

const Time = () => {

  let time = new Date();

  return (
    <>
      <p className="">This is the current Date & Time: <span className="bg-success text-white px-1">{time.toDateString()}</span>  - <span className="bg-success text-white px-1">{time.toLocaleTimeString()}</span> </p>
    </>
  )
}

export default Time