import React, { useEffect, useState } from 'react'
import Transaction from './components/Transaction'
import SearchBar from './components/SearchBar'
import TransactionForm from './components/TransactionForm'


const App = () => {
const [transactions,setTransactions]=useState([]);
const [searchText,setSearchText] = useState ('')

const handleSearch = (text) => {
  setSearchText(text)
}

  useEffect(() =>{
    fetch("https://flatiron-bank-five.vercel.app/transactions")
    .then(res =>res.json())
    .then(transaction =>setTransactions(transaction)
    )
  },[])
  
  return (
    <div >
      <div className=' flex justify-evenly items-center shadow-lg p-4 m-2'>
      <h1 className=' font-bold text-2xl text-orange-500 '>The Bank Of Flatiron</h1>
      <SearchBar onSearch={handleSearch}/>
      </div>
      <div className=' flex justify-evenly items-center' >
     
      <Transaction 
      transactions={transactions} searchText={searchText} />
       <TransactionForm transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  )
}

export default App
