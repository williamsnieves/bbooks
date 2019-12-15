import React from 'react'
import '../styles/Search.css'

const Search = ({onChange}) => {
    return <input type="text" onChange={onChange} placeholder="Search books..." />
}

export default Search