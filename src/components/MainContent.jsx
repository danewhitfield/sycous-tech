import React, {useState} from 'react'
import FilterPhone from './FilterPhone'
import LoadMoreBtn from './LoadMoreBtn'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'

const MainContent = ({data}) => {
    const [filter, setFilter] = useState('none')
    const [visibile, setVisible] = useState(3)

    if(data) {
    const consumers = data.map(location => location.consumers).map(consumer => consumer)

    const filteredData = consumers.map(consumer => {
        return consumer.filter(person => person.isPhoneMobile)
    })

        if(filter === 'none') {return (
          <main className='main'>
              <DropDown setFilter={setFilter} filter={filter} />
              <div className="list-container">
                  <ul className='list'>
                      {consumers.slice(0, visibile).map(consumer => {
                          return consumer.map(person => {
                              return (
                                <Link key={person.email} to={`/location/${person.consumerId}`}>
                                    <li className='list-item'>
                                        <p className='name'>{person.name}</p>
                                        <p>{person.email}</p>
                                        <p>{person.phoneNumber}</p>
                                        <p>{person.occupationDate}</p>
                                    </li>
                                </Link>
                          )
                        })
                      })}
                  </ul>
                  <LoadMoreBtn filter={filter} setVisible={setVisible} />
              </div>
          </main>
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