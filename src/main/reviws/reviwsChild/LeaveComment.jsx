import React, { useState } from 'react'
import styles from './reviwsChild.module.css'
import Responses from './Responses'

export default function LeaveComment() {
  const [name,setName] = useState("")
  const [subject,setSubject] = useState("")
  const [email,setEmail] = useState("")
  const [comment,setComment] = useState("")
  const [scrollTop, setScrollTop] = useState(false);
  const [updateComment,setUpdateComment] = useState(false)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const today = new Date()
  const date =(monthNames[today.getMonth()]  ) + ' ' + today.getDate() + ',' + today.getFullYear();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

    const leave = {
      "img" : "https://i.postimg.cc/2yQSMQCB/admin-Icon.png",
      "date" : `${date}`,
      "mail" : `${email}`,
      "name" : `${name}`,
      "reply": "Reply",
      "Subject" : `${subject}`,
      "comment" : `${comment}`
    }
  const leaveCommentClick = (e)=>{
    e.preventDefault()
    fetch('https://retoolapi.dev/Opj3yf/responses1', { 
      method: 'POST', 
      body: JSON.stringify(leave),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => setUpdateComment(true))
    .catch(err => console.log(err))
    setName('')
    setComment('')
    setSubject('')
    setEmail('')
  }

  
  return (
    <>
    <Responses updateComment={updateComment}/>
      <div className={styles.leaveComment}>
          <h2 className={styles.leaveCommentHeadName}>Leave Your Comment</h2>
          <div className={styles.leaveCommentFormParent}>
            <form onSubmit={leaveCommentClick} action="" className={styles.leaveCommentForm}>
               <input value={name}  onChange={(e)=>setName(e.target.value)}
               className={styles.formInputs} type="text" placeholder='Name' required/>
              <input value={subject}  onChange={(e)=>setSubject(e.target.value)}
               className={styles.formInputs} type="text" placeholder='Subject' required/>
              <input value={email} onChange={(e)=>setEmail(e.target.value)}
               className={styles.formInputs} type="mail" placeholder='Email(will not be published*)' required/>
              <input value={comment}  onChange={(e)=>setComment(e.target.value)}
               className={styles.formMessage} type="text" placeholder='Your Comment...' required/>
              <button onClick={bottomToTop} className={styles.formButton}>submit</button>
            </form>
          </div>
        </div>
    </>
   
  )
}
