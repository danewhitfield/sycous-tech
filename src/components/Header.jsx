import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to={'/'} className='header'><h1>Sycous Data</h1></Link>
    </header>
  )
}

export default Header