import React from 'react'
import TransactionItems from './TransactionItems'

const Transaction = ({transactions}) => {
  return (
    <table>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      {transactions.map(transaction=>{
        return <TransactionItems
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
        key={transaction.id}/>


      })}  
    </table>
  )
}

export default Transaction