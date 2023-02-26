import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../../MainTags'
import styles from './readMore.module.css'

export default function ReadMore() {
  return (
    <div className={styles.readMoreMainParent}>
      <Section>
        <div className={styles.readMoreParent}>
        <h2>Nunc cursus dui in metus efficitur, sit amet ullamcorper dolor viverra.</h2>
        <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna vel tempus. Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim. Morbi magna quam, molestie sed fermentum et, elementum at dolor</p>
        <Link to="/reviws" className={`${styles.readMoreHover} ${styles.readMore}`}>Read More</Link>
        </div>
      </Section>
    </div>
  )
}
