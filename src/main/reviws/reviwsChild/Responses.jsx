import React, { useEffect, useState } from 'react'
import styles from './reviwsChild.module.css'

export default function Responses({updateComment}) {
  const [responses, setResponses] = useState([]);
  const [view, setView] = useState(3)
  const [sliceResponse,setSliceResponse] = useState([])

  useEffect(()=>{
    setSliceResponse(responses.slice(0,view))
  },[view,responses])

  const fetchData = () => {
    return fetch("https://retoolapi.dev/Opj3yf/responses1")
          .then((response) => response.json())
          .then((data) => setResponses(data));
  }
  useEffect(() => {
    fetchData();
  },[updateComment])

  return (
    <div className={styles.responses}>
      <h2 className={styles.responsesHeadName}>Responses</h2>
      <div className={styles.responsesMainParent}>
      {sliceResponse && sliceResponse.length > 0 && sliceResponse.map((item) => (
        <div key={item.id} className={styles.responsesParent} >
          <div className={styles.responsesImgParent}>
            <a href='#'>
              <img src={item.img} alt="" />
            </a>
            <a href='#'>{item.name}</a>
          </div>
          <div className={styles.responsesCommentParent}>
           <p className={styles.responsesComment}>{item.comment}</p>
            <div className={styles.responsesDateParent}>
              <p className={styles.responsesDate}>{item.date}</p>
              <a href="#">{item.reply}</a>
            </div>
          </div>
        </div>
  ))}
  {view<=3 ? <button className={styles.ViewAll} onClick={()=>setView(responses.length)}>View All &#10507;</button>:
    <button className={styles.CloseALl} onClick={()=>setView(3)}>Close &#10506;</button>
}
    </div>
    </div>
  )
}
