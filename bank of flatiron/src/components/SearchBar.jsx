import React, { useState } from 'react'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
    
  const handleInputChange = (e) =>{
    const newSearchText = e.target.value;
    setSearchText(newSearchText)
    onSearch(newSearchText)
  }
  return (
    <div>
         <input
        type="text"
        onChange={handleInputChange}
        className="p-2 border-2 rounded-lg shadow-md"
        placeholder="Search..."
      />
    </div>

  )
}

export default SearchBar