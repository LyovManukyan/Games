import React from 'react'
import styles from './mail.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contactHeadName}>Contact</h2>
      <form className={styles.form}>
        <div className={styles.inputsParent}>
          <input className={styles.inputs} type="text" placeholder='Name' />
          <input className={styles.inputs} type="text" placeholder='Email' />
          <input className={styles.inputs} type="text" placeholder='Subject' />
        </div>
        <div className={styles.messageParent}>
          <input className={styles.message} type="text" placeholder='Message' />
          <button className={styles.send}>Send</button>
        </div>
      </form>
    </div>
  )
}
