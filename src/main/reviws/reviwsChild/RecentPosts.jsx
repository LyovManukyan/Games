import React, { useEffect, useState } from 'react'
import styles from './reviwsChild.module.css'

export default function RecentPosts() {
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    return fetch("https://retoolapi.dev/uuYNu9/recentPosts")
          .then((response) => response.json())
          .then((data) => setPosts(data));
  }

   
  
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className={styles.recentPosts}>
        <h2 className={styles.recentPostsHeadName}>Recent posts</h2>
      <div className={styles.recentPostsMainParent}>
        {posts.map((item)=>(
          <div key={item.id} className={styles.recentPostsParent}>
            <div className={styles.recentPostsImgParent}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.recentPostsTextParent}>
              <h3>{item.date}</h3>
              <a href='#'>{item.name}</a>
              <p>{item.text}</p>
              <button onClick={bottomToTop}>Reade More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
