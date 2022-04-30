import { useParams } from 'react-router-dom'
import { StyledLocationPage } from '../styles/LocationPage.style'
import { getLocation } from '../utils/getLocation'
import {ImHome} from 'react-icons/im'

const LocationPage = ({data}) => {
  const {consumerId} = useParams()
  const location = getLocation(data, consumerId)
  
  if(location) return (
    <StyledLocationPage>
      <div>
        <ImHome />
        <span></span>
      </div>
      <section>
        <h3>Address</h3>
        <p>Post Code: {location[0].postalCode}</p>
        <p>Street: {location[0].street}</p>
      </section>
    </StyledLocationPage>
  )
}

export default LocationPage