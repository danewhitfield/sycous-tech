import React from 'react'
import { StyledSearchNames } from '../styles/SearchNames.style'

const SearchNames = ({name, setName}) => {
  return (
    <StyledSearchNames type="text" value={name} placeholder='Search by name' onChange={(e) => setName(e.target.value)} />
  )
}

export default SearchNames