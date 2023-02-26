import React from 'react'
import { Link } from 'react-router-dom'
import styles from './xBox.module.css'

export default function XboxText() {
  return (
      <div className={styles.xBoxParent}>
        <h1>XBOX 360</h1>
        <h3>Suspendisse ornare nisl et tellus convallis, non vehicula nibh convallis.</h3>
        <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna vel tempus. Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim.</p>
        <Link to="/reviws" className={`${styles.xBoxHover} ${styles.xBox}`}>Read More</Link>
      </div>
  )
}
