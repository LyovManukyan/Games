import React, { useEffect,useState } from 'react';
import styles from './gallery.module.css'


export default function Modal({clickedImg,rightMove,setClickedImg,current,leftMove}) {
  const [gallery, setGallery] = useState([]);
  const handelClick = (e) => {
    if(e.target.classList.contains(`${styles.dismiss}`)){
      setClickedImg(null)
    }
  }
  const fetchData = () => {
    return fetch("https://retoolapi.dev/I84umr/gallery")
          .then((response) => response.json())
          .then((data) => setGallery(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  return <div className={`${styles.modal} ${styles.dismiss}`} onClick={handelClick}>
    <div className={styles.modalParent}>
    <div className={styles.modalImgParent}>
      <button className={styles.left} onClick={leftMove}>&#8249;</button>
      <button className={styles.right} onClick={rightMove}>&#8250;</button>
     <img src={clickedImg} alt="" />
  </div>
  <div className={styles.motalTextParent}>
      <div>
        <h4>Click the right half of the image to move forward.</h4>
        <p>Images {current} of {gallery.length}</p>
      </div>
        <button className={`${styles.button} ${styles.dismiss}`} onClick={handelClick}>x</button>
     </div>
    </div>
  </div>

}