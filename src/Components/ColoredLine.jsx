import React from 'react'

export default function ColoredLine({ color }) {
  return (
    <div>
      <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5
    }}></hr>
    </div>
  )
}