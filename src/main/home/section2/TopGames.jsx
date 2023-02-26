import React from 'react'
import games from './top.json'
import styles from './topGames.module.css'
import { Section } from '../../../MainTags'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TopGames() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Section className={styles.topGamesParent}>
      <h2 className={styles.gamesHeadName}>top games</h2>
      <Slider  {...settings} className={styles.gamesMainParent}>
      {games.map((item)=>(
        <div key={item.id} className={styles.gamesParent}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <img src={require(`${item.img}`)} alt="" />
        </div>
      ))}
      </Slider>
    </Section>
  )
}
