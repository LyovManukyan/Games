import React, {useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getGallery } from "../../store/gallerySlice";
import Modal from './Modal'
import styles from './gallery.module.css'
import { Section } from '../../MainTags';
import { CircularProgress } from '@mui/material';

export default function Gallery(){

  const [clickedImg,setClickedImg] = useState(null)
  const [current,setCurrent] = useState(0)
  const {gallery, loading} = useSelector((state) => state.gallery)
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getGallery());
  },[])
  // console.log(gallery)

  const imgClick = (item,index)=>{
    setCurrent(index + 1)
    setClickedImg(item.img)
  }

  const rightMove = ()=>{
    const length = [gallery].lenght; 
     if(current + 1 >= length){
      setCurrent(0);
      const newUrl = gallery[0].img
      setClickedImg(newUrl);
     }
     const newIndex = current + 1;
     const newUrl = gallery.filter((item)=>{
      return item.id === newIndex
     });
     const newItem = newUrl[0].img;
     setClickedImg(newItem)
     setCurrent(newIndex)
  }
   
  const leftMove = ()=>{
    const lenght = gallery.lenght;
    if(current ===0){
      setCurrent(lenght-1);
      const newUrl = gallery[lenght-1].img
      setClickedImg(newUrl);
    }
    const newIndex = current - 1;
    const newUrl = gallery.filter((item)=>{
     return item.id === newIndex
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem)
    setCurrent(newIndex)
  }
  return(
    <>
  <Section className={styles.gallery}>
  {loading ? <CircularProgress/> :
  <>
<h1 className={styles.galleryHeadName}>Gallery</h1>
<div className={styles.galleryMainParent}>
  {gallery && gallery.map((item,index) => (
    <div className={styles.galleryParent} key={item.id} >
      <div className={styles.galleryImgHover} onClick={()=> imgClick(item,index)}
      ></div>
      <img src={item.img} alt="" />
    </div>
    ))}
</div>
  </>}
</Section> 
  {clickedImg && (
  <Modal clickedImg={clickedImg} current={current} 
  rightMove={rightMove}
  setClickedImg={setClickedImg}
  leftMove={leftMove}/>
  )}
  </>)
}
