import React from 'react'
import TransactionItems from './TransactionItems'

const Transaction = ({ transactions }) => {
  return (
    <div  className=' flex justify-center text-center    '>
    <table className=' shadow-lg  rounded-md p-8 m-4 max-w-400  '>
        <thead >
       <tr className=" bg-slate-300">
        <th className=' p-4 border-2'>Description</th>
        <th className=' p-4 border-2'>Category</th>
        <th className=' p-4 border-2'>Amount</th>
        <th className=' p-4 border-2'>Date</th>
        </tr>
        </thead>
      {transactions.map(transaction=> <TransactionItems

       key={transaction.id}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
        date={transaction.date}
        />


      )}  
    
    </table>
    </div>
  )
}

export default Transaction