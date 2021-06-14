import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMetamask from './_1 No Metamask/NoMetamask';
import MetamaskOk from './_1 No Metamask/MetamaskOk';
import './App.css'

const eth = window.ethereum
let site

new Promise (() => {
  if (eth === undefined) {
    site = <NoMetamask/>
  } else {
    site = <MetamaskOk/>
  }
})

function App() {
  return (
    <div>
      {site}
    </div>
    
  )
}

export default App

