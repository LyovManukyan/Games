import React from 'react'
import { NavLink } from 'react-router-dom'
import { Ul } from '../../../../MainTags'
import data from './topGames.json'
import styles from '../reviwsChild.module.css'

export default function TopGame() {
  return (
    <div className={styles.topGame}>
      <h2 className={styles.topGameHeadName}>Top Games</h2>
      <div className={styles.topGameUlParent}>
        <Ul className={styles.topGameUl}>
          {data.map((item)=>(
            <li key={item.id}>
              <NavLink className={({isActive})=>isActive ? `${styles.active} ${styles.topGameA}` : styles.topGameA} to={`/reviews/${item.id}`}>{item.name}</NavLink>
            </li>
          ))}
        </Ul>
      </div>
    </div>
  )
}
