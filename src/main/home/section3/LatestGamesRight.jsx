import React from 'react'
import styles from './latestGames.module.css'

export default function LatestGamesRight() {
  return (
    <div className={styles.videoParent}>
        <iframe className={styles.video} width="100%" height="520px" src="https://www.youtube.com/embed/V5-DyoVlNOg"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowFullScreen></iframe>
    </div>
  )
}
