import React from 'react'
import games from "./latesGames.json"
import styles from './latestGames.module.css'

export default function LatestGamesLeft() {
  return (
    <div className={styles.gamesMainParent}>
      {games.map((item)=>(
        <div key={item.id} className={styles.gamesParent}>
          <div className={styles.gamesImgParent}>
            <img src={require(`${item.img}`)} alt="" />
          </div>
          <div  className={styles.gamesTextParent}>
            <div className={styles.gamesTextAParent}>
            <a href={item.path}>{item.title}</a>
            </div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
