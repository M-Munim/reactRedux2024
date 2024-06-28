import React, { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])



  return (
    <>
      <p className="text-center">This is the current Date & Time: <span className="bg-success text-white px-1">{time.toDateString()}</span>  - <span className="bg-success text-white px-1">{time.toLocaleTimeString()}</span> </p>
    </>
  )
}

export default Time

