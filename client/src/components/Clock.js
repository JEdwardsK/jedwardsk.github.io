import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDateTime(new Date())
    }, 1000)
  }, [dateTime])

  return (
    <p className="clock">
      {dateTime.toLocaleTimeString().slice(0,-3)}
    </p>
  )
}

export default Clock
