import React, {useEffect, useState} from "react";
import axios from 'axios'
import Card from "../reviws/reviesCard/Card";
import styles from "../reviws/reviews.module.css"
import { Section } from "../../MainTags";

export default function Favourite(){

    const [datas, setDatas] = useState([])
    const [empty, setEmpty] = useState('')
    const [loc, setLoc] = useState(JSON.parse(localStorage.getItem('favorites')))
    useEffect(() => {
        
        if(loc){async function request(item){
            await axios.get(`https://retoolapi.dev/q9l7cz/mailReviews/${item}`)
            .then(response=>setDatas(prev=>[...prev, response.data]))
        }   
        
        Object.keys(loc).map(item =>{
            if(item==loc[item]){
                request(item)
            }
        })}
        else{
            setEmpty('You are not have favorite items...')
            console.log(empty);
        }
        if(!datas.length){
            setEmpty('You are not have favorite items...')
        }
    }, [])
    return (
        <div className={styles.reviews}>
        <h2 className={styles.reviewsHeadName}>Favourites</h2>
            {datas.length? <Section className={styles.reviewsMainParent}>
                {datas.map(item => <Card item={item} key={item.id}/>)}    
            </Section>: 
            <Section>
                {empty}
            </Section>
            }
        </div>
    )
}