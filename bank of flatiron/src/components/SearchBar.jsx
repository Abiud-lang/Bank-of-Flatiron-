import React from 'react'

const SearchBar = () => {
    
  return (
    <div>
         <input
        type="text"
        value="" 
        className="p-2 border-2 rounded-lg shadow-md"
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar