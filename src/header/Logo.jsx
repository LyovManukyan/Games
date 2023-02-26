import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        adventure gaming
      </Link>
    </div>
  )
}
