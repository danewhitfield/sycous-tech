import { useParams } from 'react-router-dom'
import { getLocation } from '../utils/getLocation'

const LocationPage = ({data}) => {
  const {consumerId} = useParams()
  const location = getLocation(data, consumerId)
  
  if(location) return (
    <div className='list-item location-container'>
      <p>{location[0].postalCode}</p>
      <p>{location[0].street}</p>
    </div>
  )
}

export default LocationPage