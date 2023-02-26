import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import styles from './news.module.css'

export default function NewsMaterial(props) {
  const {data} = props;
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset,endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  },[itemOffset,itemsPerPage,data])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset)
  }

  return (
    <>
    <div className={styles.newsMainParent}>
      {currentItems.map(item=>(
        <div className={styles.newsParent} key={item.id}>
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt="" />
        <p className={styles.description}>{item.short_description}</p>
        <div className={styles.underDescriptionMainParent}>
          <div className={styles.platformParent}>
            <p>For : {item.platform}</p>
            <p>Release Date : {item.release_date}</p>
          </div>
          <div className={styles.forFreeParent}>
            <a target="_blank" href={item.freetogame_profile_url}>Play for free</a>
          </div>
        </div>
      </div>
      ))}
    </div>
    <div className={styles.paginationParent}>
      <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          activeLinkClassName={styles.active}
          activeClassName={styles.active}
        />
    </div>
    </>
  )
}
