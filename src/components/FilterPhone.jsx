import React, {useState} from 'react'
import DropDown from './DropDown'
import LoadMoreBtn from './LoadMoreBtn'
import MainContent from './MainContent'

const FilterPhone = ({filteredData, filter, setFilter}) => {
  const [filterVisibile, setFilterVisible] = useState(3)

  if(filter === 'is-phone') {
    return (
    <div className='list-container'>
      <DropDown setFilter={setFilter} />
      <ul className="list">
        {filteredData.slice(0, filterVisibile).map(data => {
          return data.map(x => {
              return (
                  <li key={x.email} className='list-item'>
                      <p className='name'>{x.name}</p>
                      <p>{x.email}</p>
                      <p>{x.phoneNumber}</p>
                      <p>{x.occupationDate}</p>
                  </li>
              )
            })
          })}
      </ul>
      <LoadMoreBtn setFilterVisible={setFilterVisible} filter={filter} />
    </div>)
    } else if(filter === 'none') {
      return <MainContent />
    }
}

export default FilterPhone