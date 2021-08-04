import React, { useEffect, useState } from 'react'

const DateString = () => {
  const [dateTime, setDateTime] = useState(new DateString())
  useEffect(() => {
    setInterval(() => {
      setDateTime(new DateString())
    }, 1000)
  }, [dateTime])

  return (
    <p className="clock">
      {dateTime.toLocaleDateString()}
    </p>
  )
}

export default DateString
