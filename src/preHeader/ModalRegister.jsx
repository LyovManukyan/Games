import React, { useState } from 'react'
import styles from './preHeader.module.css'

export default function ModalRegister({closeModal}) {
  const [mail,setMail] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [password,setPassword] = useState('')
  const [repeatPassword,setRepeatPassword] = useState('')

  const submit = {
    "firstName":`${firstName}`,
    "lastName":`${lastName}`,
    "mail":`${mail}`,
    "password":`${password}`
  }

  const submitRegister = (e)=>{
    e.preventDefault()
    if(repeatPassword===password){
      fetch('https://retoolapi.dev/F9kDjr/rg', { 
      method: 'POST', 
      body: JSON.stringify(submit),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
    }else{
      console.error('Chi ham@nkel')
    }
    setFirstName('')
    setLastName('')
    setMail('')
    setPassword('')
    setRepeatPassword('')
    closeModal(false)
  }
  return (
    <div className={styles.logInModalMainParent}>
      <div className={styles.logInModalParent}>
        <button className={styles.closeModalX} onClick={()=>closeModal(false)}>x</button>
        <h2 className={styles.modalHeadName}>Register</h2>
        <form onSubmit={submitRegister} className={styles.registerForm} action="">
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} required type="text" placeholder='FirstName'/>
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} required type="text" placeholder='LastnameName'/>
          <input value={mail} onChange={(e)=>setMail(e.target.value)} required type="mail" placeholder='Email' />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder='Password'/>
          <input required type="password" placeholder='RepeatPassword' onChange={(e)=>setRepeatPassword(e.target.value)} value={repeatPassword}/>
          <div className={styles.logInButtonsParent}>
            <button>Submit</button>
            <button onClick={()=>closeModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
