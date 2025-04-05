import React from 'react'
import { FaSearch } from "react-icons/fa"
import {useState , useEffect} from "react";

const SearchBar = () => {
    const [search, setSearch] = useState('')


    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon"  />
            <input placeholder="Type to Search..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}
export default SearchBar
