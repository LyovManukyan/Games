import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import ContactMap from './Map'
import OurLocation from './OurLocation'
import {Section} from '../../MainTags'
import { CircularProgress } from '@mui/material';

export default function Mail() {
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(false)
  },[])

  return (
    <Section>
      {loading ? <CircularProgress/>:
      <>
            <Contact/>
            <ContactMap/>
            <OurLocation/>
      </> 
      }
    </Section>
  )
}
