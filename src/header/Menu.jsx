import React, { useEffect, useState } from 'react'
import data from '../preHeader/data.json'
import {Ul,Li} from '../MainTags'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Menu() {
      const [display,setDisplay] = useState(false)
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      function getParametrers() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", getParametrers);
      return () => window.removeEventListener("resize", getParametrers);
    }, []);
  return (
    <div>
      {windowWidth>1250 || display ? <Ul className={windowWidth>1250 ? styles.menuUl : styles.burgerMenuUl}>
        <button className={windowWidth>1250 ? styles.BtnNone : styles.openButton} onClick={()=>setDisplay(false)}>
          <CloseIcon className={styles.button}/>
        </button>
         { data.map((item)=>(<Li onClick={()=>setDisplay(false)} key={item.id}>
        {item?.header && item.header.map((itm)=>(
              <NavLink  key={itm.id} className={({isActive})=>isActive ? `${styles.active} ${styles.menuItem}` : styles.menuItem} to={itm.link}>{itm.headName}</NavLink>
          ))}
       </Li>
            ))}
            </Ul> : (
              <button className={windowWidth>1250 ? styles.BtnNone : styles.closeButton} onClick={()=>setDisplay(true)} >
                  <MenuIcon className={styles.button}/>
        </button>
            )}
    </div>
  )
}
