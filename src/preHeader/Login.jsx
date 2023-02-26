import React,{ useState } from 'react'
import ModalLogIn from './ModalLogIn'
import styles from './preHeader.module.css'

export default function Login() {
  const [openModal,setOpenModal] = useState(false);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const deleteUser = ()=>{
    localStorage.removeItem('user')
    setUser(null)
  }
  return (
    <>
    <div>
      {user ? <button onClick={deleteUser} className={` ${styles.preHeaderButtonHover} ${styles.preHeaderButton}`}>Log out</button> : <button onClick={()=>setOpenModal(true)} className={` ${styles.preHeaderButtonHover} ${styles.preHeaderButton}`}>Log in</button>}
     
    </div>
    {openModal && <ModalLogIn closeModal={setOpenModal}/>}
    </>
  )
}
