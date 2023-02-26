import React from 'react'
import styles from './mail.module.css'
import data from './location.json'
import {Ul} from '../../MainTags'
import img from './locationImg.png'

export default function OurLocation() {
  return (
    <div className={styles.locationMainParent}>
      <h2 className={styles.ourLocationHeadName}>Our Locations</h2>
      <div className={styles.locationUlParent}>
        {data.map((item)=>(
          <div className={styles.locationParent}>
            <div className={styles.imgParent}>
              <img src={img} alt="" />
            </div>
             <Ul key={item.id} className={styles.locationUl}>
                <li className={styles.liName}>{item.name}</li>
                <li className={styles.greyLi}>{item.road}</li>
                <li className={styles.greyLi}>{item.country}</li>
                <li className={styles.greyLi}>{item.phone}</li>
                <li className={styles.greyLi}>Mail:<a className={styles.mail} href={item.   mailPath}>{item.mail}</a></li>
                <li><a className={styles.mailPath} href={item.path}>{item.pathName}</a></li>
            </Ul>
          </div>
        ))}
      </div>
    </div>
  )
}
