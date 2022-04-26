import React from 'react'

const DropDown = ({setFilter}) => {
  const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    return (
        <select name="filter-phone" id="filter-phone" onChange={handleFilter}>
            <option value="none">-None-</option>
            <option value="is-phone">Has a Mobile</option>
        </select>
    )
}

export default DropDown