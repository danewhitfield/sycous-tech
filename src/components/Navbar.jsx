import { Link } from 'react-router-dom'
import { StyledHeader } from '../styles/Header.style'
import { StyledLink } from '../styles/Link.style'
import logo from '../images/sycous-logo.jpeg'

const Header = () => {
  return (
    <StyledHeader> 
        <StyledLink to={'/'}><img src={logo} /></StyledLink>
    </StyledHeader>
  )
}

export default Header