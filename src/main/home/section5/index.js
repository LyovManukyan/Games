import React from 'react'
import { Section } from '../../../MainTags'
import XboxImg from './XboxImg'
import XboxText from './XboxText'
import styles from './xBox.module.css'

export default function Xbox() {
  return (
    <Section className={styles.xBoxSection}>
      <XboxText/>
      <XboxImg/>
    </Section>
  )
}
