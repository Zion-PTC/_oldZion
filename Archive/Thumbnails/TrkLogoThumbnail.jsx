import React from 'react'

export default function TrkLogoThumbNail({coverURL}) {
  return (
  <img alt='' src={coverURL} style={{
    gridArea: 'logo',
    borderRadius: '10px',
    height: '89%',
    placeSelf: 'center',
    border:'solid 1px #334653'
  }}></img>
)
}
