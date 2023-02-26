import React, { useState } from 'react'
import search from '../preHeader/images/search.png'
import styles from '../preHeader/preHeader.module.css'

export default function Search() {
  const [value,setValue] = useState()
  return (
    <div className={styles.searchParent}>
        <img src={search} alt="" />
        <input onChange={e=>setValue(e.target.value)}  type="text" placeholder='Search...'/>
    </div>
  )
}
