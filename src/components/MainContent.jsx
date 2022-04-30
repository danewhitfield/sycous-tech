import React, {useState} from 'react'
import FilterPhone from './FilterPhone'
import LoadMoreBtn from './LoadMoreBtn'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import { StyledMain } from '../styles/Main.style'
import { StyledList } from '../styles/List.style'
import { StyledLink } from '../styles/Link.style'

const MainContent = ({data}) => {
    const [filter, setFilter] = useState('none')
    const [visibile, setVisible] = useState(3)

    if(data) {
    const consumers = data.map(location => location.consumers).map(consumer => consumer)

    const filteredData = consumers.map(consumer => {
        return consumer.filter(person => person.isPhoneMobile)
    })

        if(filter === 'none') {return (
          <StyledMain>
              <DropDown setFilter={setFilter} filter={filter} />
                  <StyledList>
                      {consumers.slice(0, visibile).map(consumer => {
                          return consumer.map(person => {
                              return (
                                <StyledLink key={person.email} to={`/location/${person.consumerId}`}>
                                    <li>
                                        <p>{person.name}</p>
                                        <p>{person.email}</p>
                                        <p>{person.phoneNumber}</p>
                                        <p>{person.occupationDate}</p>
                                    </li>
                                </StyledLink>
                          )
                        })
                      })}
                  </StyledList>
                  <LoadMoreBtn filter={filter} setVisible={setVisible} />
          </StyledMain>
        )}
        else if(filter === 'is-phone') {
            return (
                <FilterPhone filteredData={filteredData} filter={filter} setFilter={setFilter} setVisible={setVisible} visibile={visibile} />
            )
        }
    } else if(!data) {
        return <h1>Loading Data...</h1>
    }
}

export default MainContent