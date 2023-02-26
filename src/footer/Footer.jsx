import React from 'react'
import { Section,Ul,Li } from '../MainTags'
import data from './dataFooter.json'
import styles from './footer.module.css'

export default function FootSect() {
  return (
    <div className={styles.footer}>
      <Section className={styles.footerMainParent}>
        {data.map((item)=>(
          <div key={item.id} className={styles.footerUlParent}>
            <Ul className={styles.footerUl}>
              <li className={styles.headNameParent}>
                <h2>{item.headName}</h2>
              </li>
              {item?.toPage.map((itm)=>(
                <li key={itm.id} className={styles.linkParent}>
                  {itm?.text ? (
                    <p>{itm?.text}</p>
                  ):
                  itm?.name && itm?.path ? (
                    <a href={itm.path}>{itm.name}</a>
                  ):
                  (
                    <h2>{itm.headName}</h2>
                  )
                  }
                </li>
              ))}
              <div className={styles.footerIconsParent}>
              {item.links && item.links.map((items)=>(
                <Li key={items.id}>
                  <a href={items.path_link}>
                    {/* <h2>{items.path_link}</h2> */}
                    <img src={items.img} alt="" />
                    </a>
                </Li>
              ))}
              </div>
            </Ul>
          </div>
        ))}
      </Section>
      <div className={styles.copyrightParent}>
          <p>© 2020 Adventure Gaming. All rights reserved | Design by W3layouts</p>
      </div>
    </div>

  )
}
