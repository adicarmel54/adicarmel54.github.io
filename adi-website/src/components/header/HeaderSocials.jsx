import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' tabIndex="_blank"><BsLinkedin /></a>
        <a href='https://github.com' tabIndex="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials