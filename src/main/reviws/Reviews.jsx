import React,{useEffect} from 'react'
import {Section} from '../../MainTags'
import styles from './reviews.module.css'
import { CircularProgress } from '@mui/material';
import Card from './reviesCard/Card';
import { useDispatch,useSelector } from "react-redux";
import { getReviews } from '../../store/reviewsSlice';

export default function Reviews() {
  const {reviews, loading} = useSelector((state) => state.reviews)

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getReviews());
  },[])

  

  return (
    <Section className={styles.reviews}>
    <h1 className={styles.reviewsHeadName}>Reviews</h1>
    <div className={styles.reviewsMainParent}>
      {loading ? <CircularProgress/> : reviews && reviews.map((item) => <Card item={item} key={item.id}/> )}
    </div>
  </Section>
  )
}
