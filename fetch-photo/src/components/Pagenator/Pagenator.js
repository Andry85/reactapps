import React, { useState, useEffect } from 'react';
import styles from './Pagenator.module.scss';



function Pagenator(props) {

  

  let hits = props.hits; 
  let per_page = props.per_pages;
  let pages = parseInt(hits/per_page);
  let arr = [];
  arr.length = pages;

  for(let i = 0; i < arr.length; i++) {

    arr[i] = {
      value: i+1,
      isActive: false
    }
   
    if (i === 0) {
      arr[i] = {
        value: i+1,
        isActive: true
      }
    }

  }

  const [allPages, setAllPages] = useState(arr);


  const setPager = (index) => {
    props.setPager(index);

    setAllPages(prevVal => {

      for(let i = 0; i < arr.length; i++) {

        arr[i] = {
          value: i+1,
          isActive: false
        }
       
        if (i === index) {
          arr[i] = {
            value: i+1,
            isActive: true
          }
        }
    
      }

      return arr;
    });
  }

  return (
    <ul className={styles.Pagenator}>
      {allPages.map((item, index) => (
        <li key={index} onClick={() => setPager(index)} className={ item.isActive ? styles.active : '' }>
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default Pagenator;
