import React from 'react'
import styles from './preHeader.module.css'

export default function ModalLogIn({closeModal}) {

  const userValues = {
    mail:'',
    password:'',
  }
  const callAPI = async () => {
    try {
      const response = await fetch(
        'https://retoolapi.dev/F9kDjr/rg'
      );
      const data = await response.json();
      const user = data.find(user=>user.mail===userValues.mail && user.password===userValues.password);
      localStorage.setItem('user', JSON.stringify({mail:`${user.mail}`,firstName:`${user.firstName}`,lastName:`${user.lastName}`}))
    } catch (err) {
      console.log(err);
    }
    closeModal(false)
  };


  return (
    <div className={styles.logInModalMainParent}>
      <div className={styles.logInModalParent}>
        <button className={styles.closeModalX} onClick={()=>closeModal(false)}>x</button>
        <h2 className={styles.modalHeadName}>Log in</h2>
        <form onSubmit={(e)=>e.preventDefault()} className={styles.logInForm} >
          <input onChange={(e)=>userValues.mail=e.target.value} required type="mail" placeholder='Email' />
          <input onChange={(e)=>userValues.password=e.target.value} required type="password" placeholder='Password' />
          <div className={styles.logInButtonsParent}>
            <button onClick={callAPI}>Submit</button>
            <button onClick={()=>closeModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
