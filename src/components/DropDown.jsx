import React from 'react'

const DropDown = ({setFilter, filter}) => {
  const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    if(filter === 'none') {
        return (
        <select name="filter-phone" id="filter-phone" onChange={handleFilter}>
            <option value="none">-None-</option>
            <option value="is-phone">Has a Mobile</option>
        </select>
    )
  } else {
      return (
          <select name="filter-phone" id="filter-phone" onChange={handleFilter}>
            <option value="is-phone">Has a Mobile</option>
            <option value="none">-None-</option>
        </select>
      )
  }
}

export default DropDown