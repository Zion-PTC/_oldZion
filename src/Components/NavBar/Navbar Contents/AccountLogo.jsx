import React from 'react'

export default function AccountLogo({ src }) {
  return (
    <img id='logo'
      src={src}
      style={{
        height: '85%',
        gridArea: 'logo',
        placeSelf: 'center'
      }}
    />
  )
}
