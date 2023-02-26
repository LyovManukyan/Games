import { YMaps,Map,Placemark } from '@pbe/react-yandex-maps'
import styles from './mail.module.css'
import React from 'react'


export default function ContactMap() {
  return (
    <div className={styles.mapParent}>
         <YMaps  className={styles.map}>
        <Map width="100%" height="100%"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 10
          }}
        >
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </div>
  )
}
