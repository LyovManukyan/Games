import React from 'react'
import AboutSectOneImage from './AboutSectOneImage'
import AboutSectOneText from './AboutSectOneText'
import { Section } from '../../../MainTags'
import styles from './aboutSectOne.module.css'

export default function Sect1About() {
  return (
    <div className={styles.sectOneMainParent}>
      <h2 className={styles.about}>About</h2>
      <Section className={styles.sectOneParent}>
        <AboutSectOneImage/>
        <AboutSectOneText/>
      </Section>
    </div>

  )
}
