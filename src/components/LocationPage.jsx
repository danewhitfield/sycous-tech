import { useParams } from 'react-router-dom'
import { StyledLocationPage } from '../styles/LocationPage.style'
import { getLocation } from '../utils/getLocation'

const LocationPage = ({data}) => {
  const {consumerId} = useParams()
  const location = getLocation(data, consumerId)
  
  if(location) return (
    <StyledLocationPage>
      <p>{location[0].postalCode}</p>
      <p>{location[0].street}</p>
    </StyledLocationPage>
  )
}

export default LocationPage