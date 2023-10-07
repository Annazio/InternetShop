import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Nav() {

const className = ({isActive}) => isActive? s.active : '';

  return (
    <nav className={s.nav}>
        <NavLink className={className} to={'/'}>Home</NavLink>
        <NavLink className={className} to={'/products'}>Artikel</NavLink>
        <NavLink className={className} to={'/card'}>Warenkorb</NavLink>
    </nav>
  )
}
