import { useState, useEffect } from 'react'
import { ethers } from 'ethers';

export default function useWeb3() {
  const eth = window.ethereum
  var provider = new ethers.providers.Web3Provider(eth)
  // ============================= CHAIN STATE
  var [onChainChange, setOnChainChange] = useState(false)
  var [tempChainId, setChainId] = useState(undefined)
  var [userChainId, setUserChainId] = useState('loading datas')
  // ============================= ADDRESS STATE
  var [onAddressChange, setOnAddressChange] = useState()
  var [tempUserAddr, setTempUserAddr] = useState()
  var [userAddr, setUserAddr] = useState('loading address')
  // ============================= STATUS STATE
  var [onStatusChange, setOnStatusChange] = useState()
  var [tempUserStatus, setTempUserStatus] = useState('loading status')
  var [userStatus, setUserStatus] = useState()
  // ================================ CHAIN HANDLING
  function ChainHandling() {
    eth.on('chainChanged', () => {
      setOnChainChange(!onChainChange)
    })

    useEffect(() => {
      setChainId('loading Chain ID')
      setTimeout(() => {
        setChainId(provider.network.name)
      }, 1000);
    }, [])

    var userChainPromise = new Promise((res, rej) => {
      if (tempChainId === undefined) {
        rej('error: chain Id undefined')
      }
      else {
        res(tempChainId)
      }
    })

    async function getUserChain() {
      try {
        const chainResponse = await userChainPromise
        setUserChainId(chainResponse)
      } catch (error) {
      }
    } getUserChain()
  } ChainHandling()
  // ================================ ADDRESS HANDLING
  function AddressHandling() {
    eth.on('accountsChanged', () => {
      setOnAddressChange(!onAddressChange)
    })

    useEffect(() => {
      setTempUserAddr(eth.selectedAddress)
    }, [])

    var userAddressPromise = new Promise((res, rej) => {
      if (tempUserAddr === undefined) {
        rej('error: undefined')
      } else if (tempUserAddr === null) {
        res('please, connect')
      } else {
        res(tempUserAddr)
      }
    })

    async function getUserAddr() {
      try {
        const addrResponse = await userAddressPromise
        setUserAddr(addrResponse)
      } catch (error) {
      }
    } getUserAddr()
  } AddressHandling()
  // ================================ STATUS HANDLING
  function StatusHandling(){
    eth.on('accountsChanged', () => {
      setOnStatusChange(!onStatusChange)
      })

    useEffect(() => {
      setTempUserStatus(eth.selectedAddress)
    }, [])

    var userStatusPromise = new Promise((res, rej) => {
      if (tempUserStatus === undefined) {
        rej('error: address undefined')
      } else if (tempUserStatus === null) {
        res('you are not connected')
      } else {
        res('connected')
      }
    })

    async function getUserStatus() {
      try {
        const statusResponse = await userStatusPromise
        setUserStatus(statusResponse)
      } catch (error) {
        
      }
    }getUserStatus()

  }StatusHandling()

  return [eth, userChainId, userAddr, userStatus]
}
