import React from 'react'
import { Section } from '../../../MainTags'
import data from './aboutTestimonals.json'
import styles from './testimonals.module.css'

export default function Testimonals() {
  return (
    <div>
      <div className={styles.testimonals}>
        <h2 className={styles.testimonalsHeadName}>Testimonals</h2>
      </div>
    <Section className={styles.testimonalsMainParent}>
      {data.map((item)=>(
        <div key={item.id} className={styles.testimonalsMParent}>
          <p>{item.text}</p>
          <h2>{item.name}</h2>
          <a href={item.path}>{item.pathName}</a>
        </div>
      ))}
    </Section>
    </div>

  )
}
