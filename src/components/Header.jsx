import { Link } from 'react-router-dom'
import { StyledHeader } from '../styles/Header.style'
import { StyledLink } from '../styles/Link.style'

const Header = () => {
  return (
    <StyledHeader> 
        <StyledLink to={'/'}><h1>Sycous Data</h1></StyledLink>
    </StyledHeader>
  )
}

export default Header