import { CircularProgress } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Li, Ul } from '../../../MainTags';
import styles from './reviwsChild.module.css'
import text from './images/text.png'
import month from './images/date.png'
import admin from './images/admin.png'
import comment from './images/comment.png'
import like from './images/like.png'
 

export default function ReviwsFirstChild() {
  const [current,setCurrent] = useState(15)
  const [clicked,setClicked] = useState(0)
  const current1 = ()=>{
    setCurrent(current+1)
    setClicked(1)
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const today = new Date
  const date =(monthNames[today.getMonth()]  ) + ' ' + today.getDate() + ',' + today.getFullYear();
  const {id} = useParams()
  const [reviews, setReviews] = useState([]);
  const fetchData = () => {
    return fetch("https://retoolapi.dev/giQPEI/reviews")
          .then((response) => response.json())
          .then((data) => setReviews(data));
  }

  const newItem = reviews.find((item) => item.id == id)
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className={styles.sectionOneMainParent}>
      {newItem ? <img className={styles.sectionOneImg} src={newItem.img} alt="" /> : <CircularProgress/>}
      <p className={styles.sectionOneText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br/><br/>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      <div className={styles.sectionOneUlParent}>
        <Ul className={styles.sectionOneUl}>
          <Li><img src={text} alt="" /> <a href='#'>Lorem ipsum dolor sit</a></Li>
          <Li><img src={month} alt="" /> {date}</Li>
          <Li><img className={styles.sectionOneUlImg} src={admin} alt="" /> <a href='#'>Admin</a></Li>
          <Li><img className={styles.sectionOneUlImg} src={comment} alt="" /> <a href='#'>5 comments</a></Li>
          <Li><img className={styles.sectionOneUlImg}  onClick={!clicked && current1} src={like} alt="" /> <a  href='#'>{current}</a></Li>
        </Ul>
      </div>
    </div>
  )
}
