import React from 'react'

const TransactionItems = ({ description,category,amount,date }) => {
  return (
    <tbody>
    <tr>
       
        <td  className="px-4 py-2 border-2 hover:text-orange-600  ">{description}</td>
        <td  className="px-4 py-2 border-2 hover:text-orange-600 ">{category}</td>
        <td  className="px-4 py-2 border-2 hover:text-orange-600">{amount}</td>
        <td  className="px-4 py-2 border-2 hover:text-orange-600">{date}</td>
    </tr>
    </tbody>
  )
}

export default TransactionItems