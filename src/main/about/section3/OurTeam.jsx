import React,{ useEffect} from 'react'
import { Section } from '../../../MainTags';
import styles from './ourTeam.module.css'
import { useDispatch,useSelector } from "react-redux";
import { getTeam } from '../../../store/ourTeamSlice';
import { CircularProgress } from '@mui/material';

export default function OurTeam() {
  const {team, loading} = useSelector((state) => state.team)

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getTeam());
  },[])

  return (
  <Section className={styles.ourTeam}>
    {loading ? <CircularProgress/> : 
    <>
      <h1 className={styles.ourTeamHeadName}>Our Team</h1>
            <div className={styles.outTeamMainParent}>
              {team && team.length > 0 && team.map((item) => (
                <div key={item.id} className={styles.ourTeamParent}>
                  <img src={item.img} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                ))}
            </div>
    </>
    }
    </Section>
  )
}
