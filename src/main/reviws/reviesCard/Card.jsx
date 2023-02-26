import React, {useState} from "react";
import styles from "../reviews.module.css"
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Card(props){
    const info = props.item.id
    const [isClick, setIsClick] = useState( localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites'))[info]==info : false)

    const heartClick = ()=>{
        setIsClick(!isClick)
        !isClick? localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [info]:info.toString() }) ) : localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [info]: '' }))
    }

    return(
        <div className={styles.reviewsParent} key={props.item.id} >
            <div className={styles.reviewsImgParent}>
                <button onClick={heartClick} className={styles.reviewsFavoriteButton}>
                {isClick ? <StarIcon className={styles. favIcon}/> : <StarBorderIcon className={styles.favIcon}/>}
                </button>
                <Link to={`${props.item.id}`}>
                <img src={props.item.img} alt="" />
                </Link>
            </div>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
        </div>
    )
}