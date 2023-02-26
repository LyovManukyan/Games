import React,{ useState,useEffect } from 'react'
import styles from './preHeader.module.css'
import ModalRegister from './ModalRegister';

export default function Register() {
  const [openModal,setOpenModal] = useState(false);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  window.dispatchEvent(new Event('storage'))
  // useEffect(() => {
  //   const handleStorage = () => {
  //    if(localStorage.hasOwnProperty('user')){
  //     setUser(JSON.parse(localStorage.getItem('user')))
  //    }else(setUser(null))
  //   }
  //   window.addEventListener('storage', handleStorage())
  //   return () => window.removeEventListener('storage', handleStorage())
  // }, [])
  // window.onstorage = ()=>setUser(JSON.parse(localStorage.getItem('user')));
  console.log(user);
    return (
      <>
      <div>
        {user ? <h3>{user.firstName}</h3> : <button onClick={()=>setOpenModal(true)} className={` ${styles.preHeaderButtonHover} ${styles.preHeaderButton}`}>Register</button>}
      </div>
      {openModal && <ModalRegister closeModal={setOpenModal}/>}
      </>
    )
}
