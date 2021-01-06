import React, { useState, useEffect } from 'react';
import styles from './Pagenator.module.scss';

function Pagenator(props) {

  let hits = props.hits; 
  let per_page = props.per_pages;
  let pages = parseInt(hits/per_page);
  let arr = [];
  arr.length = pages;

  for(let i = 0; i < arr.length; i++) {


    if (i === 0) {
      arr[i] = {
        value: i+1,
        isActive: true
      }
    } else {
      arr[i] = {
        value: i+1,
        isActive: false
      }
    }

  }

  const [allPages, setAllPages] = useState(arr);

  const setPager = (index) => {
    props.setPager(index);

    setAllPages(prevVal => {

      for(let i = 0; i < prevVal.length; i++) {

        prevVal[i] = {
            value: i+1,
            isActive: false
          }
      }

      return [
        ...prevVal.slice(0, index-1),
        {
          value: (index-1) + 1,
          isActive: true
        },
      ...prevVal.slice((index-1) + 1)
      ];
    });
  }

  return (
    <ul className={styles.Pagenator}>
      {allPages.map((item, index) => (
        <li key={index} onClick={() => setPager(index+1)} className={ item.isActive ? styles.active : '' }>
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default Pagenator;
