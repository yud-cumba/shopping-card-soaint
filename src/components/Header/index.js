import React from 'react'
import { Link, Nav } from './styles'
import { MdHome } from 'react-icons/md'
import { Favs } from '../Favs'

const SIZE = '32px'

export const Header= () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Favs/>
    </Nav>
  )
}