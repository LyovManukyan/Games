import React, { useEffect, useState } from 'react'
import HomeSect1 from './section1'
import TopGames from './section2/TopGames'
import LatestGames from './section3'
import ReadMore from './section4/ReadMore'
import Xbox from './section5'
import { CircularProgress } from '@mui/material';

export default function Home() {
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(false)
  },[])
  return (
    <div>
      {loading ? <CircularProgress/>:
      <>
      <HomeSect1/>
      <TopGames/>
      <LatestGames/>
      <ReadMore/>
      <Xbox/>
      </>
      }
    </div>
  )
}
