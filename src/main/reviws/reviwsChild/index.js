import React from 'react'
import { Section } from '../../../MainTags'
import LeaveComment from './LeaveComment'
import RecentPosts from './RecentPosts'
import ReviwsFirstChild from './Section1'
import TopGame from './topGames/TopGame'
import styles from './reviwsChild.module.css'

export default function ReviwsChild() {
  return (
    <Section className={styles.reviwsChild}>
      <div className={styles.reviwsChildLeft}>
        <ReviwsFirstChild/>
        <LeaveComment/>
      </div>
      <div className={styles.reviwsChildRight}>
        <TopGame/>
        <RecentPosts/>
      </div>
    </Section>
  )
}
