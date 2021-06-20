import React from 'react'

export default function Connected({ userAddr }) {
  var addr = ''
  if (userAddr === null) { } else if (userAddr === undefined) { } else {
    const cut1 = userAddr.slice(0, 5)
    const cut2 = userAddr.slice(38, 42)
    addr = cut1 + '..' + cut2
  }

  return (
    <>
      <p style={{
        color: '#D0DCE7',
        fontSize: '80%',
        margin: '0',
        gridArea: 'web3',
        placeSelf: 'center'
      }}>
        {addr}
      </p>
    </>
  )
}
