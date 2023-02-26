import React, { useEffect, useState } from 'react' 
import slideItems from './dataSlide.json' 
import styles from './section1.module.css' 
 
export default function Slider() { 
  const [current,setCurrent] = useState(0); 
 
  const slideRight = ()=>{ 
    setCurrent((prev)=>prev===slideItems.length-1 ? 0 : prev +1) 
  } 
  useEffect(()=>{ 
    setTimeout(()=>{ 
      slideRight(); 
    },4000) 
  },[current]) 
  return ( 
    <div  className={styles.slideMainParent}> 
      {slideItems.map((item)=>{ 
        if(item.id===current){ 
          return( 
            <div key={item.id} className={styles.slydeParent}> 
            <div className={styles.slideImgParent}> 
              <img src={require(`${item.img}`)} alt="" /> 
            </div> 
            <div className={styles.slideTextParent}> 
              <h2>{item.title}</h2> 
              <p>{item.text}</p> 
            </div> 
            <div className={styles.paginationParent}> 
              {slideItems.map((item)=>( 
                <div key={item.id} className={ 
                  item.id===current ? styles.paginationItemsActive : styles.paginationItems 
                  } onClick={()=> setCurrent(item.id) 
                  }> 
                </div> 
            ))} 
            </div> 
          </div> 
          ) 
        } 
  })} 
    </div> 
  ) 
}