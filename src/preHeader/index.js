import React from 'react'
import { Section } from '../MainTags'
import Login from './Login'
import MailCall from './MailCall'
import styles from './preHeader.module.css'
import Register from './Register'
import Search from './Search'

export default function PreHeader() {
  return (
    <div className={styles.preHeader}>
    <Section className={styles.preHeaderSection}>
      <MailCall/>
      <Search/>
      <div className={styles.preHeaderButtonsParent}>
      <Login/>
      <Register/>
      </div>
    </Section>
    </div>
  )
}
