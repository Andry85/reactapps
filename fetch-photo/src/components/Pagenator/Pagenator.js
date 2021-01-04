import React from 'react';
import styles from './Pagenator.module.scss';



function Pagenator(props) {

  let hits = props.hits; 
  let per_page = props.per_pages;
  let pages = parseInt(hits/per_page);
  let arr = [];
  arr.length = pages;

  for(let i = 0; i < arr.length; i++) {
    arr[i] = i+1;
  }

  const setPager = (i) => {
    props.setPager(i);
  }

  return (
    <ul className={styles.Pagenator}>
      {arr.map((item, index) => (
              <li key={index} onClick={() => setPager(index)}>
                {item}
              </li>
      ))}
    </ul>
  );
}

export default Pagenator;
