import React from 'react'
import { StyledFooter } from '../styles/Footer.style'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <p>
          Created by <a target='blank' href="https://github.com/danewhitfield">Dane Whitfield&copy;</a>
        </p>
        <span>
          <a target='blank' href='https://github.com/danewhitfield'>
            <AiFillGithub />
          </a>
        </span>
        <span>
          <a target='blank' href='https://www.linkedin.com/in/danewhitfield/'>
            <AiFillLinkedin />
          </a>
        </span>
      </section>
    </StyledFooter>
  )
}

export default Footer