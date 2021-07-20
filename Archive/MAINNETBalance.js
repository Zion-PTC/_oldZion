import React from 'react'

export default function MAINNETBalance() {
  const [balance, setBalance] = useState()

  sleep(delay2).then(() => { getBalance() })

  async function getBalance() {
    const balance = await provider.getBalance(userAddr)
    const decBalance = ethers.utils.formatEther(balance)
    setBalance(decBalance);

  }
  return (
    <div>
      
    </div>
  )
}

