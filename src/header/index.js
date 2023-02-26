import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import styles from './header.module.css'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  return (
    <div className={location.pathname === "/" ? styles.header: styles.headerOuter}>
      <Logo/>
      <Menu/>
    </div>
  )
}
