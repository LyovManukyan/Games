import React from 'react'
import img from './images/xbox.jpg'
import styles from './xBox.module.css'

export default function XboxImg() {
  return (
    <div className={styles.xboxImg}>
      <img src={img} alt="" />
    </div>
  )
}
