import React, {useEffect, useState } from 'react'
import { Section } from '../../MainTags';
import NewsMaterial from './NewsMaterial';
import styles from './news.module.css'

export default function News() {
    const [news,setNews] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b02570582msh9d03f1bd00bf6d7p1f76aejsnbf649ad9f6ef',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
 useEffect(()=>{
  fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
  .then(response => response.json())
  .then(data => setNews(data))
  .catch(err => console.error(err));
 },[])
     
  return (
    <Section className={styles.news}>
      <h1 className={styles.newsHeadName}>New Games</h1>
     <NewsMaterial data={news}/>
    </Section>
  )
}
