import React from 'react'
import { StyledDropdown } from '../styles/Dropdown.style'

const DropDown = ({setFilter, filter}) => {
  const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    if(filter === 'none') {
        return (
        <StyledDropdown name="filter-phone" id="filter-phone" onChange={handleFilter}>
            <option value="none">-None-</option>
            <option value="is-phone">Has a Mobile</option>
        </StyledDropdown>
    )
  } else {
      return (
          <StyledDropdown name="filter-phone" id="filter-phone" onChange={handleFilter}>
            <option value="is-phone">Has a Mobile</option>
            <option value="none">-None-</option>
        </StyledDropdown>
      )
  }
}

export default DropDown