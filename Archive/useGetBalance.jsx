import { useEffect, useState } from "react";
import { ethers } from "ethers"

export default function useGetBalance(userAddr) {
  const eth = window.ethereum
  const provider = new ethers.providers.Web3Provider(eth)
  const [mainNetBalance, setMainNetBalance] = useState()
  console.log(userAddr);
  
  useEffect(() => {
    async function getMainNetBalance() {
      const balance = await provider.getBalance(userAddr).catch('err')
      const decBalance = ethers.utils.formatEther(balance)
      setMainNetBalance(decBalance)
    }
    getMainNetBalance()
  }, [userAddr])
  return mainNetBalance
}
