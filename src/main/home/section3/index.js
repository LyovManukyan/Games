import React from 'react'
import { Section } from '../../../MainTags'
import LatestGamesLeft from './LatestGamesLeft'
import LatestGamesName from './LatestGamesName'
import LatestGamesRight from './LatestGamesRight'
import styles from './latestGames.module.css'

export default function LatestGames() {
  return (
      <Section>
          <LatestGamesName/>
        <div className={styles.latesGamesContentParent}>
          <LatestGamesLeft/>
          <LatestGamesRight/>
        </div>
      </Section>
  )
}
