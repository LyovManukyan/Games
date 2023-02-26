import React from 'react'
import { Li, Ul } from '../MainTags'
import styles from './preHeader.module.css'
import data from './data.json'

export default function MailCall() {
  return (
    <div>
      {data.map((item)=>(
        <Ul key={item.id} className={styles.mailUl}>
          {item?.mailCall && item.mailCall.map((itm)=>(
            <Li key={itm.id}>
              <img src={require(`${itm.image}`) } alt="" />
              <a href={itm.path}>{itm.name}</a>
            </Li>
          ))}
        </Ul>
      ))}
    </div>
  )
}
