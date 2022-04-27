import React, {useEffect, useState} from 'react'
import FilterPhone from './FilterPhone'
import { getData } from '../utils/api'
import LoadMoreBtn from './LoadMoreBtn'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'

const MainContent = () => {
    const [filter, setFilter] = useState('none')
    const [data, setData] = useState();
    const [isErr, setIsErr] = useState(false)
    const [visibile, setVisible] = useState(3)

    useEffect(() => {
      fetch(
        "http://localhost:9000/"
      )
        .then((res) => res.json())
        .then(({ locations }) => {
          setData(locations);
        }).catch(err => {
            console.log(err)
            setIsErr(true)
        })
        // getData().then(res => setData(res))
    }, []);

    if(data) {
    const consumers = data.map(location => location.consumers).map(consumer => consumer)

    const filteredData = consumers.map(consumer => {
        return consumer.filter(person => person.isPhoneMobile)
    })

        if(filter === 'none') {return (
          <main className='main'>
              <DropDown setFilter={setFilter} />
              <div className="list-container">
                  <ul className='list'>
                      {consumers.slice(0, visibile).map(consumer => {
                          return consumer.map(person => {
                              return (
                                  <Link to={`/location/${person.consumerId}`}>
                                      <li key={person.email} className='list-item'>
                                          <p className='name'>{person.name}</p>
                                          <p>{person.email}</p>
                                          <p>{person.phoneNumber}</p>
                                          <p>{person.occupationDate}</p>
                                      </li>
                                  </Link>
                          )})
                      })}
                  </ul>
                  <LoadMoreBtn setVisible={setVisible} />
              </div>
          </main>
        )}
        else if(filter === 'is-phone') {
            return (
                <FilterPhone filteredData={filteredData} filter={filter} visibile={visibile} />
            )
        }

    } else if(!data) {
        return <h1>Loading Data...</h1>
    }
    {if(isErr) return <h1>There has been an error :(</h1>}
}

export default MainContent