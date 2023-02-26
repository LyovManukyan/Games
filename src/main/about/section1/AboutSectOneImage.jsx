import React from 'react'
import image from './images/aboutSectOneImg.jpg'
import styles from './aboutSectOne.module.css'

export default function AboutSectOneImage() {
  return (
    <div className={styles.aboutImgParent}>
      <img src={image} alt="" />
    </div>
  )
}
