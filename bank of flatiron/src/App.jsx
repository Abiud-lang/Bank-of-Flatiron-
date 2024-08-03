import React, { useEffect, useState } from 'react'
import Transaction from './components/Transaction'

const App = () => {
const [transactions,setTransactions]=useState([])
  useEffect(() =>{
    fetch("http://localhost:3000/transactions")
    .then(res =>res.json())
    .then(transaction =>setTransactions(transaction)
    )
  },[])
  
 
  return (
    <div>
      <h1>The Bank Of Flatiron</h1>
      <Transaction transactions={transactions}/>
    </div>
  )
}

export default App
