import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { StyledLink } from '../styles/Link.style'
import { StyledList } from '../styles/List.style'
import DropDown from './DropDown.jsx'
import LoadMoreBtn from './LoadMoreBtn'
import MainContent from './MainContent'

const FilterPhone = ({filteredData, filter, setFilter}) => {
  const [filterVisibile, setFilterVisible] = useState(3)

  if(filter === 'is-phone') {
    return (
    <>
      <DropDown setFilter={setFilter} />
      <StyledList>
        {filteredData.slice(0, filterVisibile).map(data => {
          return data.map(x => {
              return (
                <StyledLink key={x.email} to={`/location/${x.consumerId}`}>
                  <li>
                      <p>{x.name}</p>
                      <p>{x.email}</p>
                      <p>{x.phoneNumber}</p>
                      <p>{x.occupationDate}</p>
                  </li>
                </StyledLink>
              )
            })
          })}
      </StyledList>
      <LoadMoreBtn setFilterVisible={setFilterVisible} filter={filter} />
    </>)
    } else if(filter === 'none') {
      return <MainContent />
    }
}

export default FilterPhone